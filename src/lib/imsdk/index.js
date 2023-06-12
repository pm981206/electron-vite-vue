import Auth from './service/auth';
import User from './service/user';
import Cloud from './service/cloud';
import Contact from './service/contact';
import File from './service/file';
import Enterprise from './service/enterprise';
import Config from './service/config';
import Chat from './service/chat';
import Search from './service/search';
import Group from './service/group';
import Rtcplugin from './service/rtcplugin';
import SysMsg from './service/sysmsg';
import Helper from './service/helper';
import Client from './service/client';
import io from 'socket.io-client';
import url from './utils/url';

const clientkey = new Date().getTime();
global.clientkey = clientkey;
global.socketio = io.connect(url.serverHost, {query: `clientkey=${clientkey}`});

function log(...info) {
  console.log(`[weblog]:`, info);
}
export let service = {
  auth: new Auth(),
  user: new User(),
  cloud: new Cloud(),
  contact: new Contact(),
  file: new File(),
  enterprise: new Enterprise(),
  config: new Config(),
  search: new Search(),
  chat: new Chat(),
  group: new Group(),
  rtcplugin: new Rtcplugin(),
  sysMsg: new SysMsg(),
  client: new Client(),
  log: log,
  helper: new Helper()
};

function start() {
  log('client start');
  const clientkey = new Date().getTime();
  // global.clientkey = clientkey;
  service.client.start({clientkey}).then(resp => {
    log('in client start cb:', resp);
    if (!resp.clientkey) {
      return;
    }
    // //  初始化socketio
    // console.log('url:', url);
    
    // global.socketio = io.connect(url.serverHost, {query: `clientkey=${resp.clientkey}`});
    // global.clientkey = resp.clientkey;
  }).catch(error => {
    console.log(error);
  });
}

// start();