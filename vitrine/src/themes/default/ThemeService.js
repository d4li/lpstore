import { d4li_Storage } from '../../util/storage';
import { http, config } from '../../util/httpService';

const ThemeService = {
  _authenticate: (_bin) => {
    return new Promise(async (resolve, reject) => {
      try {
        const auth = await http.POST(config.API_URL+'/authentication', {
          strategy: "local",
          email: _bin.email,
          password: _bin.password,
        });

        const _getStorage = await d4li_Storage.get();
        let storage = {
          auth: {
            accessToken: auth.response.accessToken,
            userHash: auth.response.userHash
          }
        }

        localStorage.setItem('_d4li', JSON.stringify(storage));
        return resolve({pageLoad: false, data: auth.response});
      } catch (e) {
        return resolve(null);
      }
    });
  },

  _getAuth: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const _getStorage = JSON.parse(localStorage.getItem('_d4li'));
        if (_getStorage && _getStorage.auth) return resolve(_getStorage.auth);
        return resolve(null)
      } catch (e) {
        return reject(null);
      }
    });
  },

  _getProfile: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const _getStorage = await d4li_Storage.get();
        if (_getStorage.data) return resolve(_getStorage.data.profile);
      } catch (e) {
        return resolve(null);
      }
    });
  }
};

export {
  ThemeService
};
