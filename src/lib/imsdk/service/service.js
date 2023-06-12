import { _get, _getSync, _notify } from '../utils/process';
import serverHost from '../utils/url';
export default class Service {
  constructor(url) {
    this.url = `${serverHost.serverHost}/${url}`;
  }

  _process(functionName, param, cb) {
    console.log('in _process: ', functionName, param);
    return new Promise((resolve, reject) => {
      _get(this.url, functionName, param ? JSON.stringify(param) : param, resp => {
        resolve(resp);
        if (cb) {
          cb(resp);
        }
      });
    });
    
  }

  async _processAsync(functionName, param) {
    console.log('in _processAsync');
    let result =  await _getSync(this.url, functionName, param ? JSON.stringify(param) : param);
    console.log('end _processAsync');
    return result;
  }

  _processNotify(name, cb) {
    _notify(name, cb);
  }
}
