import axios from 'axios';
import { TApiConfig } from '../types/api-config.type';

export function createAxiosInstance(config: TApiConfig) {

  const { on401, on403, on400, addHeaders } = config;

  const instance = axios.create();

  instance.interceptors.request.use(req => {

    if (!req.headers) {
      req.headers = {} as any;
    }

    if (typeof addHeaders === 'function') {
      Object.entries(addHeaders(req) || {}).forEach(([name, value]) => req.headers[name] = value);
    }

    return req;
  })

  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      console.warn({ err, msg: 'axiosInstanceFactory error' })
      if (err?.response?.status === 401) {

        if (typeof on401 === 'function') {
          on401(err?.response);
        }
      } else if (err?.response?.status === 403) {
        if (typeof on403 === 'function') {
          on403(err?.response);
        }
      } else if (err?.response?.status === 400) {
        if (typeof on400 === 'function') {
          on400(err?.response);
        }
      } else {
        throw err;
      }
    }
  );

  return instance;
}
