import { upperFirst, cloneDeep } from 'lodash'

function soundView (sound) {
  sound = cloneDeep(sound)
  window.dataLayer.push({
    event: 'SoundView',
    id: sound.id,
    name: sound.name,
    mood: sound.mood,
    lang: sound.lang.value,
    area: sound.area.name
  })
}

function soundPlay (sound, second) {
  sound = cloneDeep(sound)
  window.dataLayer.push({
    event: 'SoundPlay',
    id: sound.id,
    name: sound.name,
    mood: sound.mood,
    lang: sound.lang.value,
    area: sound.area.name,
    second
  })
}

function soundFilter (type, val) {
  window.dataLayer.push({
    // SoundFilterMood, SoundFilterLang, SoundFilterArea
    event: `SoundFilter${upperFirst(type)}`,
    // filter_mood: ,
    // filter_lang: ,
    // filter_area: ,
    [`filter_${type}`]: val
  })
}

export default {
  soundView,
  soundPlay,
  soundFilter
}
