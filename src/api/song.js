import {commonParams} from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongKey(mid) {
  const url = '/api/express_mobile3'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    needNewCode: 0,
    cid: 205361747,
    filename: `C400${mid}.m4a`,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    guid: 9192281449,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}