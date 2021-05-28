
import { forApp, forConsoleBase } from '@ali/console-base-messenger';
import _ from 'lodash';
import { getCookieValue } from '../utils/util';
import { regionList, regionIds, regionDomain } from '../global';

forApp.setRegions(regionList);

export let regionId = (() => {
  let id = getCookieValue('currentRegionId');
  if (!regionIds.includes(id)) {
    id = _.get(regionList, '[0].id');
    forApp.setRegionId(id);
  }
  return id;
})();

export function updateRegionId(id) {
  regionId = id;
  getRegionAppList();
}

forConsoleBase.onSetRegionId(updateRegionId);

export let currentPid = (() => {
  let id = getCookieValue('currentRegionId');
  if (location.hash.indexOf('detail') > -1) {
    let arr = location.hash.substr(2).split('/');
    // ["detail", "cn-beijing", "deydyr0nqp@f359ba6f8f1176c", "home"]
    return arr[2];
  } else {
    return '';
  }
})();

export function updatePid(pid) {
  currentPid = decodeURIComponent(pid);
}

export function getRegionAppList(formatting = true) {
  const arr = window.APP_LIST || []; // region列表
  // 获取当前region下的pid
  const arr2 = arr.filter((item) => {
    return item.regionId === regionId;
  });

  // 格式化数据为wind数据格式
  if (formatting) {
    return arr2.map((item) => {
      return { value: item.pid, label: item.siteName };
    });
  } else {
    return arr2;
  }
}

export function getRegionDomain(regionId) {
  return regionDomain[regionId];
}
