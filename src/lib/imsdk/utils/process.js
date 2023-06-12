/*
 * @Author: lpy
 * @Date: 2020-01-02 09:18:06
 * @LastEditTime: 2020-03-16 15:09:37
 * @LastEditors: Please set LastEditors
 * @Description: 执行rest调用及websocket调用方法
 * @FilePath: /imsdk-debugger/client/imsdk/utils/process.js
 */
import axios from 'axios';
// let axiosClient = axios.create();

axios.interceptors.request.use(function(config) {

  if (!global.clientkey) {
    console.log('init client.');
    return config;
  }
  console.log('config', config);
  config.headers.Authorization = global.clientkey;
  return config;
});
export function _get(host, name, param, cb) {
  let p = param ? `?param=${param}` : '';
  axios.get(`${host}/${name}${p}`)
    .then(resp => {
      cb(resp.data);
    })
    .catch(error => {
      console.log(error);
    });
}

export async function _getSync(host, name, param) {
  console.log('in _getSync');
  let p = param ? `?param=${param}` : "";
  let resp = await axios.get(`${host}/${name}${p}`);
  return resp;
}

export function _notify(name, cb) {
  if (!global.socketio) {
    return;
  }
  global.socketio.emit(name);
  global.socketio.on(`${name}Handler`, cb);
}
