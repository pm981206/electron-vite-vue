import Service from './service';

export default class UserService extends Service {
  constructor() {
    super('user');
  }

  getAccountInfo(param, cb) {
    return this._process('getAccountInfo', param, cb);
  }

  addLocalSetting(param, cb) {
    return this._process('addLocalSetting', param, cb);
  }

  addLocalSettingSync(param, cb) {
    return this._process('addLocalSettingSync', param, cb);
    return null;
  }

  addOrDeleteApplication(param, cb) {
    return this._process('addOrDeleteApplication', param, cb);
  }

  addOrDeleteCustomEmoticon(param, cb) {
    return this._process('addOrDeleteCustomEmoticon', param, cb);
  }

  changeHiddenPasswd(param, cb) {
    return this._process('changeHiddenPasswd', param, cb);
  }

  circleOfFriend(param, cb) {
    return this._process('circleOfFriend', param, cb);
  }

  createAppRoom(param, cb) {
    return this._process('createAppRoom', param, cb);
  }

  deleteLocalSetting(param, cb) {
    return this._process('deleteLocalSetting', param, cb);
  }

  deleteLocalSettingSync(param, cb) {
    return this._process('deleteLocalSettingSync', param, cb);
    return null;
  }

  delHiddenTarget(param, cb) {
    return this._process('delHiddenTarget', param, cb);
  }

  transLocalData(param, cb) {
    return this._process('transLocalData', param, cb);
  }

  wakeUp(param, cb) {
    return this._process('wakeUp', param, cb);
  }

  getAppInfo(param, cb) {
    return this._process('getAppInfo', param, cb);
  }

  getGlobalNoDisturbMode(param, cb) {
    return this._process('getGlobalNoDisturbMode', param, cb);
  }

  getGlobalNoDisturbListMode(param, cb) {
    return this._process('getGlobalNoDisturbListMode', param, cb);
  }

  getHiddenTarget(param, cb) {
    return this._process('getHiddenTarget', param, cb);
  }

  getIdByAccount(param, cb) {
    return this._process('getIdByAccount', param, cb);
  }

  getInstalledApplication(param, cb) {
    return this._process('getInstalledApplication', param, cb);
  }

  getInstalledApplicationSorted(param, cb) {
    return this._process('getInstalledApplicationSorted', param, cb);
  }

  getLocalSetting(param, cb) {
    return this._process('getLocalSetting', param, cb);
  }

  getMsgNotifyMode(param, cb) {
    return this._process('getMsgNotifyMode', param, cb);
  }

  getOauthCode(param, cb) {
    return this._process('getOauthCode', param, cb);
  }

  getPersonalData(param, cb) {
    return this._process('getPersonalData', param, cb);
  }

  getServerTime(param, cb) {
    return this._process('getServerTime', param, cb);
  }

  getServerTimeSync(param, cb) {
    return this._process('getServerTimeSync', param, cb);
    return '';
  }

  getSetting(param, cb) {
    return this._process('getSetting', param, cb);
  }

  getUserDefineVoice(param, cb) {
    return this._process('getUserDefineVoice', param, cb);
  }

  getUserNoDisturbMode(param, cb) {
    return this._process('getUserNoDisturbMode', param, cb);
  }

  getUserToAppConfigList(param, cb) {
    return this._process('getUserToAppConfigList', param, cb);
  }

  pageQueryEmoticon(param, cb) {
    return this._process('pageQueryEmoticon', param, cb);
  }

  queryEmoticon(param, cb) {
    return this._process('queryEmoticon', param, cb);
  }

  QueryEmoticonPackageByLabel(param, cb) {
    return this._process('QueryEmoticonPackageByLabel', param, cb);
  }

  queryEmotionInPackage(param, cb) {
    return this._process('queryEmotionInPackage', param, cb);
  }

  queryMarketApplication(param, cb) {
    return this._process('queryMarketApplication', param, cb);
  }

  singleQueryEmoticonPackage(param, cb) {
    return this._process('singleQueryEmoticonPackage', param, cb);
  }

  regCircleOfFriendNotifyCb(param, cb) {
    return this._processNotify('regCircleOfFriendNotifyCb', cb);
  }

  regGetMyselfCb(param, cb) {
    return this._processNotify('regGetMyselfCb', cb);
  }

  regOperateUserCb(param, cb) {
    return this._processNotify('regOperateUserCb', cb);
  }

  regUpdateFinished(param, cb) {
    return this._processNotify('regUpdateFinished', cb);
  }

  regUserHeadImgUpdateCb(param, cb) {
    return this._processNotify('regUserHeadImgUpdateCb', cb);
  }

  regGetUTagCMenu(param, cb) {
    return this._processNotify('regGetUTagCMenu', cb);
  }

  regAppConfigUpdate(param, cb) {
    return this._processNotify('regAppConfigUpdate', cb);
  }

  setAppOrder(param, cb) {
    return this._process('setAppOrder', param, cb);
  }

  setGolbalNoDisturbMode(param, cb) {
    return this._process('setGolbalNoDisturbMode', param, cb);
  }

  setHiddenTarget(param, cb) {
    return this._process('setHiddenTarget', param, cb);
  }

  setMsgNotifyMode(param, cb) {
    return this._process('setMsgNotifyMode', param, cb);
  }

  setOnlineState(param, cb) {
    return this._process('setOnlineState', param, cb);
  }

  setPersonalData(param, cb) {
    return this._process('setPersonalData', param, cb);
  }

  setSetting(param, cb) {
    return this._process('setSetting', param, cb);
  }

  setUserDefineVoice(param, cb) {
    return this._process('setUserDefineVoice', param, cb);
  }

  setUserNoDisturbMode(param, cb) {
    return this._process('setUserNoDisturbMode', param, cb);
  }

  setUserToAppConfig(param, cb) {
    return this._process('setUserToAppConfig', param, cb);
  }

  updateAccountInfo(param, cb) {
    return this._process('updateAccountInfo', param, cb);
  }

  updateAppRoomInfo(param, cb) {
    return this._process('updateAppRoomInfo', param, cb);
  }

  updateAppRoomMem(param, cb) {
    return this._process('updateAppRoomMem', param, cb);
  }

  updateExtendInfo(param, cb) {
    return this._process('updateExtendInfo', param, cb);
  }

  updateLocalSetting(param, cb) {
    return this._process('updateLocalSetting', param, cb);
  }

  getEntAppInfo(param, cb) {
    return this._process('getEntAppInfo', param, cb);
  }

  updateLocalSettingSync(param, cb) {
    return this._process('updateLocalSettingSync', param, cb);
    return false;
  }

  regAppShow(param, cb) {
    return this._process('regAppShow', param, cb);
  }

  getAgencyList(param, cb) {
    return this._process('getAgencyList', param, cb);
  }

  regPullMsgCb(param, cb) {
    return this._process('regPullMsgCb', param, cb);
  }
}
