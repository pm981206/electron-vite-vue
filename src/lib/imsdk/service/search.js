/**
 * @file     搜索模块相关接口.
 * @author    linpeiyuan <linpeiyuan@vrvmail.com.cn>
 * @date      2019.11.4
 * @copyright Beijing VRV Software Co.,Ltd
 * 
 */
import Service from './service';

export default class SearchService extends Service {
  constructor() {
    super('search');
  }

  getUserInfo(param, cb) {
    return this._process('getUserInfo', param, cb);
  }

  getGroupInfo(param, cb) {
    return this._process('getGroupInfo', param, cb);
  }

  getUserInfoByScene(param, cb) {
    return this._process('getUserInfoByScene', param, cb);
  }

  getUserInfoEx(param, cb) {
    return this._process('getUserInfoEx', param, cb);
  }

  getUserInfoSync(param, cb) {
    return this._process('getUserInfoSync', param, cb);
  }

  groupSearchMember(param, cb) {
    return this._process('groupSearchMember', param, cb);
  }

  searchDetailMessage(param, cb) {
    return this._process('searchDetailMessage', param, cb);
  }

  searchPublicAccount(param, cb) {
    return this._process('searchPublicAccount', param, cb);
  }

  searchFromLocal(param, cb) {
    return this._process('searchFromLocal', param, cb);
  }

  searchFromLocalWithType(param, cb) {
    return this._process('searchFromLocalWithType', param, cb);
  }

  searchFromNet(param, cb) {
    return this._process('searchFromNet', param, cb);
  }

  searchMessage(param, cb) {
    return this._process('searchMessage', param, cb);
  }
}
