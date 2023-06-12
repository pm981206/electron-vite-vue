import Service from './service';

export default class CloudService extends Service {
  constructor() {
    super('cloud');
  }

  addFile(param, cb) {
    return this._process('addFile', param, cb);
  }

  delFile(param, cb) {
    return this._process('delFile', param, cb);
  }

  renameFile(param, cb) {
    return this._process('renameFile', param, cb);
  }

  moveFile(param, cb) {
    return this._process('moveFile', param, cb);
  }

  searchFiles(param, cb) {
    return this._process('searchFiles', param, cb);
  }

  uploadFile(param, cb) {
    return this._process('uploadFile', param, cb);
  }

  createTeam(param, cb) {
    return this._process('createTeam', param, cb);
  }

  getTeams(param, cb) {
    return this._process('getTeams', param, cb);
  }

  createPubDir(param, cb) {
    return this._process('createPubDir', param, cb);
  }

  queryFloder(param, cb) {
    return this._process('queryFloder', param, cb);
  }

  getPermission(param, cb) {
    return this._process('getPermission', param, cb);
  }

  getRoleById(param, cb) {
    return this._process('getRoleById', param, cb);
  }

  getRoles(param, cb) {
    return this._process('getRoles', param, cb);
  }

  teamMembers(param, cb) {
    return this._process('teamMembers', param, cb);
  }

  teamResetMember(param, cb) {
    return this._process('teamResetMember', param, cb);
  }

  copyFile(param, cb) {
    return this._process('copyFile', param, cb);
  }
}
