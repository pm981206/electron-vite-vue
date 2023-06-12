import Service from './service';

export default class FileService extends Service {
  constructor() {
    super('file');
  }

  fileOperate(param, cb) {
    return this._process('fileOperate', param, cb);
  }

  getFileList(param, cb) {
    return this._process('getFileList', param, cb);
  }

  getFilesInfo(param, cb) {
    return this._process('getFilesInfo', param, cb);
  }

  decryptFile(param, cb) {
    return this._process('decryptFile', param, cb);
  }

  encryptFile(param, cb) {
    return this._process('encryptFile', param, cb);
  }

  compress(param, cb) {
    return this._process('compress', param, cb);
  }

  uncompress(param, cb) {
    return this._process('uncompress', param, cb);
  }

  queryFileValid(param, cb) {
    return this._process('queryFileValid', param, cb);
  }

  delayFiles(param, cb) {
    return this._process('delayFiles', param, cb);
  }

  queryFileValidGDoc(param, cb) {
    return this._process('queryFileValidGDoc', param, cb);
  }
  
  downloadFile(param, cb, pro) {
    let progress = {extra: 1, progress: 50, info: ''};
    pro(progress);
    return this._process('downloadFile', param, resp => {
      progress.progress = 100;
      pro(progress);
      cb(resp);
    });
  }

  downloadImage(param, cb, pro) {
    let progress = { extra: 1, progress: 50, info: '' };
    pro(progress);
    return this._process('downloadImage', param, resp => {
      progress.progress = 100;
      pro(progress);
      cb(resp);
    });
  }

  downloadNineBoxImage(param, cb, pro) {
    let progress = { extra: 1, progress: 50, info: '' };
    pro(progress);
    return this._process('downloadNineBoxImage', param, resp => {
      progress.progress = 100;
      pro(progress);
      cb(resp);
    });
  }

  uploadFile(param, cb, pro) {
    let progress = { extra: 1, progress: 50, info: '' };
    pro(progress);
    return this._process('uploadFile', param, resp => {
      progress.progress = 100;
      pro(progress);
      cb(resp);
    });
  }

  uploadImage(param, cb, pro) {
    let progress = { extra: 1, progress: 50, info: '' };
    pro(progress);
    return this._process('uploadImage', param, resp => {
      progress.progress = 100;
      pro(progress);
      cb(resp);
    });
  }

  uploadShareImage(param, cb, pro) {
    let progress = { extra: 1, progress: 50, info: '' };
    pro(progress);
    return this._process('uploadShareImage', param, resp => {
      progress.progress = 100;
      pro(progress);
      cb(resp);
    });
  }

  downloadExternalFilev(param, cb) {
    return this._process('downloadExternalFile', param, cb);
  }

  uploadAvatar(param, cb) {
    return this._process('uploadAvatar', param, cb);
  }

  uploadBackground(param, cb) {
    return this._process('uploadBackground', param, cb);
  }

  isTransmitting(param, cb) {
    return this._process('isTransmitting', param, cb);
  }

  isTransmittingInTarget(param, cb) {
    return this._process('isTransmittingInTarget', param, cb);
  }

  cancelAllTransfer(param, cb) {
    return this._process('cancelAllTransfer', param, cb);
  }

  cancelTargetTransfer(param, cb) {
    return this._process('cancelTargetTransfer', param, cb);
  }

  cancelTransfer(param, cb) {
    return this._process('cancelTransfer', param, cb);
  }

  getNameByUrl(param, cb) {
    return this._process('getNameByUrl', param, cb);
  }

  getAlreadyDownload(param, cb) {
    return this._process('getAlreadyDownload', param, cb);
  }

  checkUrlValid(param, cb) {
    return this._process('checkUrlValid', param, cb);
  }

  getMarkFromImageFFT(param, cb) {
    return this._process('getMarkFromImageFFT', param, cb);
  }

  getMarkFromImageSimple(param, cb) {
    return this._process('getMarkFromImageSimple', param, cb);
  }

  putMarkOnImageFFT(param, cb) {
    return this._process('putMarkOnImageFFT', param, cb);
  }

  putMarkOnImageSimple(param, cb) {
    return this._process('putMarkOnImageSimple', param, cb);
  }

  putShowMarkOnImage(param, cb) {
    return this._process('putShowMarkOnImage', param, cb);
  }

  reduceImage(param, cb) {
    return this._process('reduceImage', param, cb);
  }

  getFilesFormClipboard(param, cb) {
    return this._process('getFilesFormClipboard', param, cb);
  }
}
