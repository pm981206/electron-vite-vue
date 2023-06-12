/*
 * @Author: lpy
 * @Date: 2020-01-02 09:29:36
 * @LastEditTime : 2020-01-07 14:53:51
 * @LastEditors  : Please set LastEditors
 * @Description: 客户端初始化接口，主要是为了握手，从服务端获取token
 * @FilePath: /imsdk-debugger/client/imsdk/service/client.js
 */
import Service from './service';

export default class Client extends Service {
  constructor() {
    super('client');
  }

  start(param) {
    return this._process('start', param, null);
  }

  close() {
    
  }

  heart() {
    
  }
};
