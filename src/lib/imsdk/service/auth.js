import Service from './service';
export default class AuthService extends Service {
  constructor() {
    super('auth');
  }

  login(param, cb) {
    return this._process('login', param, cb);
  }

  prelogin(param, cb) {
    return this._process('prelogin', param, cb);
  }

  logout(param, cb) {
    return this._process('logout', param, cb);
  }

  autoLogin(param, cb) {
    return this._process('autoLogin', param, cb);
  }

  offlinelogin(param, cb) {
    return this._process('offlinelogin', param, cb);
  }

  offLineToLogin(param, cb) {
    return this._process('offLineToLogin', param, cb);
  }

  abortLogin(param, cb) {
    return this._process('abortLogin', param, cb);
  }

  verifyImgCode(param, cb) {
    return this._process('verifyImgCode', param, cb);
  }

  signup(param, cb) {
    return this._process('signup', param, cb);
  }

  signupOld(param, cb) {
    return this._process('signupOld', param, cb);
  }

  setNameAndPasswd(param, cb) {
    return this._process('setNameAndPasswd', param, cb);
  }

  getqVerifyCodes(param, cb) {
    return this._process('getqVerifyCodes', param, cb);
  }

  getRegCode(param, cb) {
    return this._process('getRegCode', param, cb);
  }

  quickRegister(param, cb) {
    return this._process('quickRegister', param, cb);
  }

  bindMail(param, cb) {
    return this._process('bindMail', param, cb);
  }

  getBindPhoneCode(param, cb) {
    return this._process('getBindPhoneCode', param, cb);
  }

  bindPhone(param, cb) {
    return this._process('bindPhone', param, cb);
  }

  changePassword(param, cb) {
    return this._process('changePassword', param, cb);
  }

  getPasswordRule(param, cb) {
    return this._process('getPasswordRule', param, cb);
  }

  getResetPwCode(param, cb) {
    return this._process('getResetPwCode', param, cb);
  }

  getSecUrl(param, cb) {
    return this._process('getSecUrl', param, cb);
  }

  resetPassword(param, cb) {
    return this._process('resetPassword', param, cb);
  }

  getCertOutDate() {
    return ''; //  TODO: 实现同步方式
  }

  getClientKey(param, cb) {
    return this._process('getClientKey', param, cb);
  }

  checkOrRefreshAccessToken(param, cb) {
    return this._process('checkOrRefreshAccessToken', param, cb);
  }

  getAuthAccessToken(param, cb) {
    return this._process('getAuthAccessToken', param, cb);
  }

  getAuthUserBean(param, cb) {
    return this._process('getAuthUserBean', param, cb);
  }

  getLoginAuthCode(param, cb) {
    return this._process('getLoginAuthCode', param, cb);
  }

  SetBifactorLogin(param, cb) {
    return this._process('SetBifactorLogin', param, cb);
  }

  getWebSiteAuth(param, cb) {
    return this._process('getWebSiteAuth', param, cb);
  }

  regDbUpdatedCb(param, cb) {
    this._processNotify("regDbUpdatedCb", cb);
  }

  regGetServerRequst(param, cb) {
    this._processNotify("regGetServerRequst", cb);
  }

  regNetChangedCb(param, cb) {
    this._processNotify("regNetChangedCb", cb);
  }

  regReLoginCb(param, cb) {
    this._processNotify("regReLoginCb", cb);
  }

  getLogoutCode(param, cb) {
    this._processNotify("getLogoutCode", param, cb);
  }

  setLogoutAccount(param, cb) {
    this._processNotify("setLogoutAccount", param, cb);
  }

  logoutLocal(param, cb) {
    this._processNotify("logoutLocal", param, cb);
  }

  regDbUpdatedProcessCb(param, cb) {
    this._processNotify("regDbUpdatedProcessCb", param, cb);
  }
}
