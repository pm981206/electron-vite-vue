import Service from './service';

export default class ContactService extends Service {
  constructor() {
    super('contact');
  }

  getLocalPhoneBook() {}

  addLocalPhoneBook(param) {}

  deleteLocalPhoneBook(param) {}

  updateLocalPhoneBook(param) {}

  postContact(param, cb) {
    return this._process('postContact', param, cb);
  }

  getContactList(param, cb) {
    return this._process('getContactList', param, cb);
  }

  getContactInfo(param, cb) {
    return this._process('getContactInfo', param, cb);
  }

  getBuddyInfoFromNet(param, cb) {
    return this._process('getBuddyInfoFromNet', param, cb);
  }

  getContactOnline(param, cb) {
    return this._process('getContactOnline', param, cb);
  }

  getVerifyType(param, cb) {
    return this._process('getVerifyType', param, cb);
  }

  addContact(param, cb) {
    return this._process('addContact', param, cb);
  }

  addContactNoVerify(param, cb) {
    return this._process('addContactNoVerify', param, cb);
  }

  updateContactInfo(param, cb) {
    return this._process('updateContactInfo', param, cb);
  }

  contactIsBuddy(param, cb) {
    return this._process('contactIsBuddy', param, cb);
  }

  removeContact(param, cb) {
    return this._process('removeContact', param, cb);
  }

  oneWayBuddy() {}

  queryExtendedField(param, cb) {
    return this._process('queryExtendedField', param, cb);
  }

  queryExtendedFieldSync(param, cb) {
    return this._process('queryExtendedFieldSync', param, cb);
  }

  canMakeVerifyCode(param, cb) {
    return this._process('canMakeVerifyCode', null, cb);
  }

  makeVerifyCode(param, cb) {
    return this._process('makeVerifyCode', param, cb);
  }

  getUserIdByInviteCode(param, cb) {
    return this._process('getUserIdByInviteCode', param, cb);
  }

  isInviteCode(param) {}

  verifyCodeValid(param, cb) {
    return this._process('verifyCodeValid', param, cb);
  }

  getBlackList(param, cb) {
    return this._process('getBlackList', param, cb);
  }

  addBlackList(param, cb) {
    return this._process('addBlackList', param, cb);
  }

  removeBlackList(param, cb) {
    return this._process('removeBlackList', param, cb);
  }

  regBuddyListCb(param, cb) {
    this._processNotify("regBuddyListCb", cb);
  }

  regContactBackImgUpdateCb(param, cb) {
    this._processNotify("regContactBackImgUpdateCb", cb);
  }

  regContactHeadImgUpdateCb(param, cb) {
    this._processNotify("regContactHeadImgUpdateCb", cb);
  }

  regContactOnline(param, cb) {
    this._processNotify("regContactOnline", cb);
  }

  regContactOnlineChanged(param, cb) {
    this._processNotify("regContactOnlineChanged", cb);
  }

  regOperateBuddyCb(param, cb) {
    this._processNotify("regOperateBuddyCb", cb);
  }

  regPresentCb(param, cb) {
    this._processNotify("regPresentCb", cb);
  }

  getBuddySetting(param, cb) {
    this._processNotify("getBuddySetting", cb);
  }
}
