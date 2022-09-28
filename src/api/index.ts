import axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL,
  headers: {
    timeout: 3000,
  },
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 2XX 이외
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.error('ERROR', error.response.data.details);
          break;
        case 401:
          console.error('ERROR', error.response.data.details);
          break;
        case 500:
          console.error('ERROR', error.response.data.details);
          break;
        // default:
        //   break;
      }
    } else {
      throw Error('SERVER IS NOT RUNNING', error);
    }
    return Promise.reject(error);
  }
);

const httpRequest = {
  get: (url: string, config?: AxiosRequestConfig<any> | undefined) => instance.get(url, config),
  post: (url: string, data: object, config?: AxiosRequestConfig<any> | undefined) =>
    instance.post(url, data, config),
  delete: (url: string, config?: AxiosRequestConfig<any> | undefined) =>
    instance.delete(url, config),
};

export default httpRequest;
