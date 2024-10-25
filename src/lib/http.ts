import axios, { AxiosRequestConfig } from "axios";
import { getBaseURL } from "./utils";

export interface HttpMethods {
  post: (url: string, payload: object, options?: object) => Promise<any>;
  patch: (url: string, payload: object, options?: object) => Promise<any>;
  get: (url: string, options?: object) => Promise<any>;
  delete: (url: string) => Promise<any>;
}


export type SuccessResponse = {
  status: 'success',
  message: string;
  data: unknown
}

export type ErrorResponse = {
  status: 'error',
  title: string;
  data: {message: string}[]
}

class HttpReq implements HttpMethods {
  http;

  constructor() {
    this.http = axios.create({
      baseURL: getBaseURL(),
    });

    this.http.defaults.withCredentials = true;
    this.http.defaults.withXSRFToken = true;

    this.http.interceptors.request.use(
      function (config) {
        config.headers["Content-Type"] =
          config.data instanceof FormData
            ? "multipart/formdata"
            : "application/json";
          config.headers['Accept'] = "application/json";
          
        return config;
      },
      function (error) {
        return error.response
      },
    );
  }


  post = async (url: string, payload: any, options?: AxiosRequestConfig) =>
    await this.http.post(url, payload, options);

  patch = async (url: string, payload: any, options?: AxiosRequestConfig) =>
    await this.http.patch(url, payload, options);

  get = async (url: string, options?: AxiosRequestConfig) =>
    await this.http.get(url, options);

  delete = async (url: string, options?: AxiosRequestConfig) =>
    await this.http.delete(url, options);
}

const http = new HttpReq();

export default http;
