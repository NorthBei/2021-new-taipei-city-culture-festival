import firebase from './init'

const auth = firebase.auth()

const db = firebase.firestore()
const { Timestamp } = firebase.firestore
const storage = firebase.storage()
const storageRef = storage.ref()

async function getCurrentUser () {
  // refer: https://dev.to/gautemeekolsen/vue-guard-routes-with-firebase-authentication-f4l
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
};

async function addUserSound (sound, file) {
  const soundDbRef = db.collection('sounds').doc()
  sound.id = soundDbRef.id
  const snapshot = await storageRef.child(`sounds/${sound.id}-${file.name}`).put(file)
  const url = await snapshot.ref.getDownloadURL()
  sound.file.name = file.name
  sound.file.url = url
  const data = {
    ...sound,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  }
  await soundDbRef.set(data, { merge: true })
  return data
}

async function getUserSounds (userId) {
  const querySnapshot = await db.collection('sounds').where('provider.uid', '==', userId).orderBy('createdAt').get()
  const sounds = []
  querySnapshot.forEach((doc) => {
    sounds.push(doc.data())
  })
  return sounds
}

async function updateUserSound (sound, file, isFileUpdated, orginFileName) {
  if (isFileUpdated) {
    await storageRef.child(`sounds/${sound.id}-${orginFileName}`).delete()
    const snapshot = await storageRef.child(`sounds/${sound.id}-${sound.file.name}`).put(file)
    const url = await snapshot.ref.getDownloadURL()
    sound.file.url = url
  }
  const data = {
    ...sound,
    updatedAt: Timestamp.now()
  }
  await db.collection('sounds').doc(sound.id).update(data)
  return data
}

async function deleteUserSound (sound) {
  await storageRef.child(`sounds/${sound.id}-${sound.file.name}`).delete()
  await db.collection('sounds').doc(sound.id).delete()
}

async function getMapSounds () {
  const querySnapshot = await db.collection('sounds').get()
  const sounds = []
  querySnapshot.forEach((doc) => {
    sounds.push(doc.data())
  })
  return sounds
}

async function register (email, password) {
  const userCredential = await auth.createUserWithEmailAndPassword(email, password)
  return userCredential.user
}

async function loginByEmail (email, password) {
  const userCredential = await auth.signInWithEmailAndPassword(email, password)
  console.log(userCredential)
  return userCredential.user
}

async function loginByFacebook () {
  const provider = new firebase.auth.FacebookAuthProvider()
  await auth.signInWithRedirect(provider)
}

async function getUserAfterFacebookRedirect () {
  const { user } = await auth.getRedirectResult()
  return user
}

async function signOut () {
  await auth.signOut()
}

export default {
  auth,
  getCurrentUser,
  addUserSound,
  getUserSounds,
  updateUserSound,
  deleteUserSound,
  getMapSounds,
  register,
  loginByEmail,
  loginByFacebook,
  getUserAfterFacebookRedirect,
  signOut
}
