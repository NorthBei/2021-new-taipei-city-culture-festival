// import firebase from '@/firebase'

const module = {
  namespaced: true,
  state: {
    dialog: {
      isShow: false,
      isLoading: false,
      state: '',
      title: '',
      content: ''
    }
  },
  mutations: {
    setDialogShow (state, { isShow = true, title = '', content = '' }) {
      state.dialog.isLoading = false
      state.dialog.title = title
      state.dialog.content = content
      state.dialog.isShow = isShow
    },
    setDialogLoading (state, isLoading = true) {
      state.dialog.isLoading = isLoading
      state.dialog.title = ''
      state.dialog.content = ''
      state.dialog.isShow = true
    }
  },
  actions: {
  },
  getters: {
    isDialogShow: state => state.dialog.isShow,
    isDialogLoading: state => state.dialog.isLoading,
    dialogTitle: state => state.dialog.title,
    dialogContent: state => state.dialog.content
  }
}

export default module
