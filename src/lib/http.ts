import axios, { AxiosRequestConfig } from "axios";
import { Env, getBaseURL } from "./utils";

export interface HttpMethods {
  post: (url: string, payload: object, options?: object) => Promise<unknown>;
  patch: (url: string, payload: object, options?: object) => Promise<unknown>;
  get: (url: string, options?: object) => Promise<unknown>;
  delete: (url: string) => Promise<unknown>;
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
      function(config) {
        const token = localStorage.getItem(Env.VITE_AUTH_TOKEN)
        config.headers["Content-Type"] =
          config.data instanceof FormData
            ? "multipart/formdata"
            : "application/json";
          config.headers['Accept'] = "application/json";
          config.headers['Authorization'] = `Bearer ${token}`
          
          
        return config;
      },
      function (error) {
        return error.response
      },
    );
  }


  post = async (url: string, payload: unknown, options?: AxiosRequestConfig) =>
    await this.http.post(url, payload, options);

  patch = async (url: string, payload: unknown, options?: AxiosRequestConfig) =>
    await this.http.patch(url, payload, options);

  get = async (url: string, options?: AxiosRequestConfig) =>
    await this.http.get(url, options);

  delete = async (url: string, options?: AxiosRequestConfig) =>
    await this.http.delete(url, options);
}

const http = new HttpReq();

export default http;
