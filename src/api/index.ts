import axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL,
  headers: {
    timeout: 3000,
  },
});

const httpRequest = {
  get: (url: string, config?: AxiosRequestConfig<any> | undefined) => instance.get(url, config),
  post: (url: string, data: object, config?: AxiosRequestConfig<any> | undefined) =>
    instance.post(url, data, config),
  delete: (url: string, config?: AxiosRequestConfig<any> | undefined) =>
    instance.delete(url, config),
};

export default httpRequest;
