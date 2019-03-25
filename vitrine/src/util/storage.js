import { http, config } from './httpService';

export const d4li_Storage = {
  start: () => {
    if (typeof localStorage !== "undefined" || localStorage !== null)
      return localStorage.setItem('_d4li', JSON.stringify({
        auth: {},
        data: {}
      }));
  },
  get: () => {
    return new Promise((resolve, reject) => {
      if (typeof localStorage !== "undefined" || localStorage !== null && localStorage.getItem('_d4li'))
        return resolve(JSON.parse(localStorage.getItem('_d4li')));
    });
  },
  save: async (obj) => {
    return new Promise(async (resolve, reject) => {
      if (typeof localStorage !== "undefined" || localStorage !== null)
        localStorage.setItem('_d4li', JSON.stringify(obj));

      return resolve(JSON.parse(localStorage.getItem('_d4li')));
    });
  }
}
