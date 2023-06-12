import Service from './service';

export default class ConfigService extends Service {
  constructor() {
    super('config');
  }

  getAutoStart(param, cb) {
    // return this._process('getAutoStart', param, cb);
    return { status: false };
  }

  getIsRoming(param, cb) {
    return this._process('getIsRoming', param, cb);
  }

  getLastPreLoginData(param, cb) {
    // return this._process('getLastPreLoginData', param, cb);
    let jsonInfo = {
      elogo: 'vrv',
      serverVersion: '4.1.1',
      systemConfig: '59',
      serverhost: {
        apHost: 'https://vrv.linkdood.cn:10669',
        netId: '1',
        apPath:'/ap'
      },
      dmark: 'comm',
      preList: [
        'vrv.linkdood.cn',
        '172.17.15.62',
        '172.17.15.62'
      ]
    }
    let result = {
      account: '',
      area: '',
      json: JSON.stringify(jsonInfo)
    };
    return result;
  }

  getLoginExDataAsync(param, cb) {
    return this._process('getLoginExDataAsync', param, cb);
  }

  getLoginInfos(param, cb) {
    return this._process('getLoginInfos', param, cb);
  }

  getMultiChannelAddress(param, cb) {
    return this._process('getMultiChannelAddress', param, cb);
  }

  getMultiChannelAddressAsync(param, cb) {
    return this._process('getMultiChannelAddressAsync', param, cb);
  }

  getNetProxy(param, cb) {
    return this._process('getNetProxy', param, cb);
  }

  getPreloginInfoEx(param, cb) {
    return this._process('getPreloginInfoEx', param, cb);
  }

  getSdkVersion(param, cb) {
    return this._process('getSdkVersion', param, cb);
  }

  getSubServerInfo(param, cb) {
    return this._process('getSubServerInfo', param, cb);
  }

  getUserTypeById(param, cb) {
    return this._process('getUserTypeById', param, cb);
  }

  headImgPath(param, cb) {
    return this._process('headImgPath', param, cb);
    return { path: '' };
  }

  rootPath(param, cb) {
    return this._process('rootPath', param, cb);
    return { path: '' };
  }

  userAudioPath(param, cb) {
    return this._process('userAudioPath', param, cb);
    return { path: '' };
  }

  userCachePath(param, cb) {
    return this._process('userCachePath', param, cb);
    return { path: '' };
  }

  userEmotionPath(param, cb) {
    return this._process('userEmotionPath', param, cb);
    return { path: '' };
  }

  userFilePath(param, cb) {
    return this._process('userFilePath', param, cb);
    return {path: ''};
  }

  userImgPath(param, cb) {
    return this._process('userImgPath', param, cb);
    return { path: '' };
  }

  userVideoPath(param, cb) {
    return this._process('userVideoPath', param, cb);
    return { path: '' };
  }

  getMsgParserMode(param, cb) {
    return this._process('getMsgParserMode', param, cb);
  }

  setAppName(param, cb) {
    return this._process('setAppName', param, cb);
  }

  setAppVersion(param, cb) {
    return this._process('setAppVersion', param, cb);
  }

  setAutoStart(param, cb) {
    return this._process('setAutoStart', param, cb);
  }

  setCertificatePath(param, cb) {
    return this._process('setCertificatePath', param, cb);
  }

  setHttpsLogin(param, cb) {
    return this._process('setHttpsLogin', param, cb);
  }

  setInterConnect(param, cb) {
    return this._process('setInterConnect', param, cb);
  }

  setIsRoming(param, cb) {
    return this._process('setIsRoming', param, cb);
  }

  setLanguage(param, cb) {
    return this._process('setLanguage', param, cb);
  }

  setLanguageType(param, cb) {
    return this._process('setLanguageType', param, cb);
  }

  setLoginInfo(param, cb) {
    return this._process('setLoginInfo', param, cb);
  }

  setLogLevel(param, cb) {
    return this._process('setLogLevel', param, cb);
  }

  setMsgParserMode(param, cb) {
    return this._process('setMsgParserMode', param, cb);
  }

  setMultichannel(param, cb) {
    return this._process('setMultichannel', param, cb);
  }

  setNetProxy(param, cb) {
    return this._process('setNetProxy', param, cb);
  }

  setNetStatus(param, cb) {
    return this._process('setNetStatus', param, cb);
  }

  setNotifyStatus(param, cb) {
    return this._process('setNotifyStatus', param, cb);
  }

  setOffloginSwitch(param, cb) {
    return this._process('setOffloginSwitch', param, cb);
  }

  setPlugPower(param, cb) {
    return this._process('setPlugPower', param, cb);
  }

  setPwIsCrypt(param, cb) {
    return this._process('setPwIsCrypt', param, cb);
  }

  setRootPath(param, cb) {
    return this._process('setRootPath', param, cb);
  }

  setSubServerInfo(param, cb) {
    return this._process('setSubServerInfo', param, cb);
  }

  setTextCoding(param, cb) {
    return this._process('setTextCoding', param, cb);
  }

  setTicket(param, cb) {
    return this._process('setTicket', param, cb);
  }

  getCapsLockStatusAsync() {
    return this._process('getCapsLockStatus', param, cb);
  }

  delLoginInfo(param, cb) {
    return this._process('delLoginInfo', param, cb);
  }

  reNotifyData(param, cb) {
    return this._process('reNotifyData', param, cb);
  }

  regIsSystemIdleCb(param, cb) {
    this._processNotify("regIsSystemIdleCb", cb);
  }

  regTheThridPartyMsgCb(param, cb) {
    this._processNotify("regTheThridPartyMsgCb", cb);
  }

  getSystemNationCode() {
    return '0086';
  }

  setHideBuddySwitch(param) {
    return this._process('reNotifyData', param, null);
  }

  setScreenShotHotKey(param,cb) {
    return this._process('reNotifyData', param, cb);
  }

  setScreenShotHotKeyAsync(param) {
    return this._process('setScreenShotHotKeyAsync', param, null);
  }

  setScreenDisplay(param) {
    return this._process('setScreenDisplay', param, null);
  }
}
