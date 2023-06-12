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
    super('group');
  }

  createGroup(param, cb) {
    return this._process('createGroup', param, cb);
  }

  addGroup(param, cb) {
    return this._process('addGroup', param, cb);
  }

  setGroupSet(param, cb) {
    return this._process('setGroupSet', param, cb);
  }

  getGroupSet(param, cb) {
    return this._process('getGroupSet', param, cb);
  }

  getGroupSetEx(param, cb) {
    return this._process('getGroupSetEx', param, cb);
  }

  transferGroup(param, cb) {
    return this._process('transferGroup', param, cb);
  }

  removeGroup(param, cb) {
    return this._process('removeGroup', param, cb);
  }

  getGroupInfo(param, cb) {
    return this._process('getGroupInfo', param, cb);
  }

  setGroupInfo(param, cb) {
    return this._process('setGroupInfo', param, cb);
  }

  getGroupList(param, cb) {
    return this._process('getGroupList', param, cb);
  }

  getGroupOnlineStatus(param, cb) {
    return this._process('getGroupOnlineStatus', param, cb);
  }

  setGroupExtraInfo(param, cb) {
    return this._process('setGroupExtraInfo', param, cb);
  }

  getGroupMsgRemindType(param, cb) {
    return this._process('getGroupMsgRemindType', param, cb);
  }

  setGroupMsgRemindType(param, cb) {
    return this._process('setGroupMsgRemindType', param, cb);
  }

  getGroupBeepTone(param, cb) {
    return this._process('getGroupBeepTone', param, cb);
  }

  setGroupBeepTone(param, cb) {
    return this._process('setGroupBeepTone', param, cb);
  }

  getGroupAnnouncementList(param, cb) {
    return this._process('getGroupAnnouncementList', param, cb);
  }

  addGroupAnnouncement(param, cb) {
    return this._process('addGroupAnnouncement', param, cb);
  }

  checkGroupAnnouncementExist(param, cb) {
    return this._process('checkGroupAnnouncementExist', param, cb);
  }

  delGroupAnnouncement(param, cb) {
    return this._process('delGroupAnnouncement', param, cb);
  }

  getMemberList(param, cb) {
    return this._process('getMemberList', param, cb);
  }

  getMemberInfo(param, cb) {
    return this._process('getMemberInfo', param, cb);
  }

  setMemberInfo(param, cb) {
    return this._process('setMemberInfo', param, cb);
  }

  inviteMember(param, cb) {
    return this._process('inviteMember', param, cb);
  }

  isInGroup(param, cb) {
    return this._process('isInGroup', param, cb);
  }

  removeMembers(param, cb) {
    return this._process('removeMembers', param, cb);
  }

  removeMember(param, cb) {
    return this._process('removeMember', param, cb);
  }

  getPersonalGroupImg(param, cb) {
    return this._process('getPersonalGroupImg', param, cb);
  }

  setPersonalGroupImg(param, cb) {
    return this._process('setPersonalGroupImg', param, cb);
  }

  getGroupFileList(param, cb) {
    return this._process('getGroupFileList', param, cb);
  }

  deleteGroupFile(param, cb) {
    return this._process('deleteGroupFile', param, cb);
  }

  regGetGrpMemListCb(param, cb) {
    this._processNotify('regGetGrpMemListCb', cb);
  }

  regGroupBackImgUpdateCb(param, cb) {
    this._processNotify('regGroupBackImgUpdateCb', cb);
  }

  regGroupHeadImgUpdateCb(param, cb) {
    this._processNotify('regGroupHeadImgUpdateCb', cb);
  }

  regGroupListCb(param, cb) {
    this._processNotify('regGroupListCb', cb);
  }

  regGroupRefreshCb(param, cb) {
    this._processNotify('regGroupRefreshCb', cb);
  }

  regGrpMemInfoRefreshCb(param, cb) {
    this._processNotify('regGrpMemInfoRefreshCb', cb);
  }

  regGrpMemRefreshCb(param, cb) {
    this._processNotify('regGrpMemRefreshCb', cb);
  }

  regMemberHeadImgUpdateCb(param, cb) {
    this._processNotify('regMemberHeadImgUpdateCb', cb);
  }

  regTransferGroupCb(param, cb) {
    this._processNotify('regTransferGroupCb', cb);
  }

}