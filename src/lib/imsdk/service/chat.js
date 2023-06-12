/**
 * @file     会话模块相关接口.
 * @author    linpeiyuan <linpeiyuan@vrvmail.com.cn>
 * @date      2019.11.4
 * @copyright Beijing VRV Software Co.,Ltd
 * 
 */
import Service from './service';
export default class ChatService extends Service {
  constructor() {
    super("chat");
  }

  getChatList(param, cb) {
    return this._process('getChatList', param, cb);
  }

  addRecontact(param, cb) {
    return this._process('addRecontact', param, cb);
  }

  removeChat(param, cb) {
    return this._process('removeChat', param, cb);
  }

  getAllMsgCount(param, cb) {
    return this._process('getAllMsgCount', param, cb);
  }

  getAtMessage(param, cb) {
    return this._process('getAtMessage', param, cb);
  }

  getMessages(param, cb) {
    return this._process('getMessages', param, cb);
  }

  getMsgDays(param, cb) {
    return this._process('getMsgDays', param, cb);
  }

  getMsgFromDay(param, cb) {
    return this._process('getMsgFromDay', param, cb);
  }

  getImgMsg(param, cb) {
    return this._process('getImgMsg', param, cb);
  }

  getIssueById(param, cb) {
    return this._process('getIssueById', param, cb);
  }

  getIssueMessages(param, cb) {
    return this._process('getIssueMessages', param, cb);
  }

  getBadWordList(param, cb) {
    return this._process('getBadWordList', param, cb);
  }

  getContractMaxReadId(param, cb) {
    return this._process('getContractMaxReadId', param, cb);
  }

  getGroupMsgReadState(param, cb) {
    return this._process('getGroupMsgReadState', param, cb);
  }

  getGroupMsgUnreadCounter(param, cb) {
    return this._process('getGroupMsgUnreadCounter', param, cb);
  }

  getGroupMsgUnreadInfo(param, cb) {
    return this._process('getGroupMsgUnreadInfo', param, cb);
  }

  getUnReadMsgCountByType(param, cb) {
    return this._process('getUnReadMsgCountByType', param, cb);
  }

  getUrlInfo(param, cb) {
    return this._process('getUrlInfo', param, cb);
  }

  sendMessage(param, cb) {
    return this._process('sendMessage', param, cb);
  }

  sendShortMessage(param, cb) {
    return this._process('sendShortMessage', param, cb);
  }

  sendAppendixMessage(param, cb) {
    return this._process('sendAppendixMessage', param, cb);
  }

  sendMsgInputState(param, cb) {
    return this._process('sendMsgInputState', param, cb);
  }

  transferMessage(param, cb) {
    return this._process('transferMessage', param, cb);
  }

  insertMessage(param, cb) {
    return this._process('insertMessage', param, cb);
  }

  forwardMessage(param, cb) {
    return this._process('forwardMessage', param, cb);
  }

  decryptMsg(param, cb) {
    return this._process('decryptMsg', param, cb);
  }

  deleteAllMessage(param, cb) {
    return this._process('deleteAllMessage', param, cb);
  }

  deleteMessageById(param, cb) {
    return this._process('deleteMessageById', param, cb);
  }

  deleteMessageByTime(param, cb) {
    return this._process('deleteMessageByTime', param, cb);
  }

  updateMsg(param, cb) {
    return this._process('updateMsg', param, cb);
  }

  searchIssueLocal(param, cb) {
    return this._process('searchIssueLocal', param, cb);
  }

  chatTop(param, cb) {
    return this._process('chatTop', param, cb);
  }

  setMessageRead(param, cb) {
    return this._process('setMessageRead', param, cb);
  }

  setMessageUnRead(param, cb) {
    return this._process('setMessageUnRead', param, cb);
  }

  setMsgReads(param, cb) {
    return this._process('setMsgReads', param, cb);
  }

  setPrivateKey(param, cb) {
    return this._process('setPrivateKey', param, cb);
  }

  regMessageCursorCb(param, cb) {
    this._processNotify('regMessageCursorCb', cb);
  }

  regMessageInputStateCb(param, cb) {
    this._processNotify('regMessageInputStateCb', cb);
  }

  regOfflineMsgCb(param, cb) {
    this._processNotify('regOfflineMsgCb', cb);
  }

  regTransMsgNoticeCb(param, cb) {
    this._processNotify('regTransMsgNoticeCb', cb);
  }

  regBadWordUpdateCb(param, cb) {
    this._processNotify('regBadWordUpdateCb', cb);
  }

  regMsgNoticeCb(param, cb) {
    this._processNotify("regMsgNoticeCb", cb);
  }

  regChatHeadImgUpdateCb(param, cb) {
    this._processNotify('regChatHeadImgUpdateCb', cb);
  }

  regRecontactCb(param, cb) {
    this._processNotify('regRecontactCb', cb);
  }

  /** 消息提醒相关 */
  createReminderMsg(param, cb) {
    return this._process('createReminderMsg', param, cb);
  }

  getReminderMsgByPage(param, cb) {
    return this._process('getReminderMsgByPage', param, cb);
  }

  SendMessageToAPP(param, cb) {
    return this._process('SendMessageToAPP', param, cb);
  }

  deleteReminderMsg(param, cb) {
    return this._process('deleteReminderMsg', param, cb);
  }

  getTaskMsg(param, cb) {
    return this._process('getTaskMsg', param, cb);
  }
}