/*
 * @Author: lpy
 * @Date: 2020-01-09 10:05:27
 * @LastEditTime : 2020-01-09 10:08:07
 * @LastEditors  : Please set LastEditors
 * @Description: 系统消息相关接口
 * @FilePath: /imsdk-debugger/client/imsdk/service/sysmsg.js
 */
import Service from './service';
export default class SysMsgService extends Service {
  constructor() {
    super('sysmsg');
  }

  adminRespToEnterGroup(param, cb) {
    return this._process('adminRespToEnterGroup', param, cb);
  }

  respToAddBuddy(param, cb) {
    return this._process('respToAddBuddy', param, cb);
  }

  userRespToEnterGroup(param, cb) {
    return this._process('userRespToEnterGroup', param, cb);
  }
}