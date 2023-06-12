import Service from './service';

export default class EnterpriseService extends Service {
  constructor() {
    super('enterprise');
  }

  addNote(param, cb) {
    return this._process('addNote', param, cb);
  }

  addNotebook(param, cb) {
    return 
  }

  getVisibleOrgUsers(param, cb) {
    return this._process('getVisibleOrgUsers', param, cb);
  }

  getNote(param, cb) {
    return this._process('getNote', param, cb);
  }

  searchNote(param, cb) {
    return this._process('searchNote', param, cb);
  }

  delNote(param, cb) {
    return this._process('delNote', param, cb);
  }

  

  addNote(param, cb) {
    return this._process('addNote', param, cb);
  }

  addNotebook(param, cb) {
    return this._process('addNotebook', param, cb);
  }

  addNoteEntry(param, cb) {
    return this._process('addNoteEntry', param, cb);
  }

  addRoomMember(param, cb) {
    return this._process('addRoomMember', param, cb);
  }

  changRoomIcon(param, cb) {
    return this._process('changRoomIcon', param, cb);
  }

  changRoomName(param, cb) {
    return this._process('changRoomName', param, cb);
  }

  editNote(param, cb) {
    return this._process('editNote', param, cb);
  }

  delNote(param, cb) {
    return this._process('delNote', param, cb);
  }

  editNotebook(param, cb) {
    return this._process('editNotebook', param, cb);
  }

  editNoteEntry(param, cb) {
    return this._process('editNoteEntry', param, cb);
  }

  deleRoom(param, cb) {
    return this._process('deleRoom', param, cb);
  }

  delNotebook(param, cb) {
    return this._process('delNotebook', param, cb);
  }

  delNotebookById(param, cb) {
    return this._process('delNotebookById', param, cb);
  }

  delNoteEntry(param, cb) {
    return this._process('delNoteEntry', param, cb);
  }

  delRoomMember(param, cb) {
    return this._process('delRoomMember', param, cb);
  }

  getAllRoom(param, cb) {
    return this._process('getAllRoom', param, cb);
  }

  getApTask(param, cb) {
    return this._process('getApTask', param, cb);
  }

  getBodyTask(param, cb) {
    return this._process('getBodyTask', param, cb);
  }

  getHistoryTask(param, cb) {
    return this._process('getHistoryTask', param, cb);
  }

  getMsgCountByTargetID(param, cb) {
    return this._process('getMsgCountByTargetID', param, cb);
  }

  getMsgTopNAtGroup(param, cb) {
    return this._process('getMsgTopNAtGroup', param, cb);
  }

  getMsgTopNGroup(param, cb) {
    return this._process('getMsgTopNGroup', param, cb);
  }

  getMsgTopNSession(param, cb) {
    return this._process('getMsgTopNSession', param, cb);
  }

  getNote(param, cb) {
    return this._process('getNote', param, cb);
  }

  getNotebook(param, cb) {
    return this._process('getNotebook', param, cb);
  }

  getNoteEntry(param, cb) {
    return this._process('getNoteEntry', param, cb);
  }

  getOrgInfo(param, cb) {
    return this._process('getOrgInfo', param, cb);
  }

  getOrgInfos(param, cb) {
    return this._process('getOrgInfos', param, cb);
  }

  getOrgInfoSync(param, cb) {
    return this._process('getOrgInfoSync', param, cb);
  }

  getRecvMsg(param, cb) {
    return this._process('getRecvMsg', param, cb);
  }

  getRecvTask(param, cb) {
    return this._process('getRecvTask', param, cb);
  }

  getRoom(param, cb) {
    return this._process('getRoom', param, cb);
  }

  getVisibleOrgUsers(param, cb) {
    return this._process('getVisibleOrgUsers', param, cb);
  }

  getVisibleOrgUsersSync(param, cb) {
    return this._process('getVisibleOrgUsersSync', param, cb);
  }

  queryEntUserAll(param, cb) {
    return this._process('queryEntUserAll', param, cb);
  }

  queryEntUserOneById(param, cb) {
    return this._process('queryEntUserOneById', param, cb);
  }

  queryEntUserOneByName(param, cb) {
    return this._process('queryEntUserOneByName', param, cb);
  }

  createRoom(param, cb) {
    return this._process('createRoom', param, cb);
  }

  archiveNote(param, cb) {
    return this._process('archiveNote', param, cb);
  }

  checkNoteEnkey(param, cb) {
    return this._process('checkNoteEnkey', param, cb);
  }

  decryptNotebook(param, cb) {
    return this._process('decryptNotebook', param, cb);
  }

  encryptNotebook(param, cb) {
    return this._process('encryptNotebook', param, cb);
  }

  finishTask(param, cb) {
    return this._process('finishTask', param, cb);
  }

  orgAndUserSearch(param, cb) {
    return this._process('orgAndUserSearch', param, cb);
  }

  queryEnterpriseUserlist(param, cb) {
    return this._process('queryEnterpriseUserlist', param, cb);
  }

  recoveryTask(param, cb) {
    return this._process('recoveryTask', param, cb);
  }

  regEntUpdateFinishCb(param, cb) {
    this._processNotify("regEntUpdateFinishCb", cb);
  }

  regGetAllRoomsCb(param, cb) {
    this._processNotify("regGetAllRoomsCb", cb);
  }

  regOrgMemHeadImgUpdateCb(param, cb) {
    this._processNotify("regOrgMemHeadImgUpdateCb", cb);
  }

  searchNote(param, cb) {
    return this._process('searchNote', param, cb);
  }

  searchNoteEntry(param, cb) {
    return this._process('searchNoteEntry', param, cb);
  }

  sendTaskMsg(param, cb) {
    return this._process('sendTaskMsg', param, cb);
  }

  setReadTask(param, cb) {
    return this._process('setReadTask', param, cb);
  }

  topNote(param, cb) {
    return this._process('topNote', param, cb);
  }

  topRoom(param, cb) {
    return this._process('topRoom', param, cb);
  }

  topTask(param, cb) {
    return this._process('topTask', param, cb);
  }

  orgAndUserSearchEx(param, cb) {
    return this._process('orgAndUserSearchEx', param, cb);
  }
}
