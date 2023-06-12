/**
 * 平台相关数据
 */

export default class Platform {
  constructor() {
    this.platformInfos = [
      {
        platform: 'win32',
        deviceinfo: 'pc-h5-win',
        dbPath: '/AppData/Local/Linkdood/'
      },
      {
        platform: 'darwin',
        deviceinfo: 'pc-mac',
        dbPath: '/Library/Containers/com.vrv.Linkdood/Data/Linkdood/'
      },
      {
        platform: 'linux',
        deviceinfo: 'pc-linux',  //  以后可能需要根据具体平台获取
        dbPath: '/.local/share/Linkdood/'
      }
    ];

    this.platformInfos.map(info => {
      if (info.platform === process.platform) {
        this.platformInfo = { deviceInfo: info.deviceinfo, dbPath: info.dbPath, platform: info.platform };
        return;
      }
    });
  }
  platforminfo() {
    return this.platformInfo;
  }
}
