import Service from './service';
export default class Helper extends Service {
  constructor() {
    super('helper');
  }

  getSystemNationCode(param, cb) {
    return '0086';
  }
  getCapsLockStatus(){
    return false;
  }
}