import { d4li_Storage } from './storage';
import axios from 'axios';
export const config = {
  API_URL: 'http://0.0.0.0:3001'
};

export const http = {
  GET: (url, headers=null) => {
    return new Promise(async (resolve, reject) => {
      let errors = [];

      if (!url)
        errors.push({description: 'URL Not Found', message: 'URL inválida!'});

      try {
        const _getStorage = await d4li_Storage.get();
        if (!headers && _getStorage) {
          headers = {headers: {Authorization: _getStorage.auth.accessToken}};
        }
        const req = await axios.get(url, headers);
        return resolve({status: req.status, response: req.data});
      } catch (e) {
        errors.push({description: 'Network Error', message: e});
        return reject({status: 502, errors: errors});
      }
    });
  },

  POST: (url, body, headers) => {
    return new Promise(async (resolve, reject) => {
      let errors = [];

      if (!url)
        errors.push({description: 'URL Not Found', message: 'URL inválida!'});

      try {
        const req = await axios.post(url, body, headers);
        return resolve({status: req.status, response: req.data});
      } catch (e) {
        let req = JSON.parse(JSON.stringify(e)).response;
        if (req.status == 409)
          return reject({status: req.status, errors: errors});

        errors.push({description: 'Request error - '+req.status, message: 'Ocorreu um erro - '+req.statusText});

        if (errors.length)
          return reject({status: 502, errors: errors});
      }
    });
  },

  PUT: (url, body, headers) => {
    return new Promise(async (resolve, reject) => {
      let errors = [];

      if (!url)
        errors.push({description: 'URL Not Found', message: 'URL inválida!'});

      try {
        const req = await axios.patch(url, body, headers);
        return resolve({status: req.status, response: req.data});
      } catch (e) {
        let req = JSON.parse(JSON.stringify(e)).response;
        errors.push({description: 'Request error - '+req.status, message: 'Ocorreu um erro'});

        if (errors.length)
          return reject({status: 502, errors: errors});
      }
    });
  }
};
