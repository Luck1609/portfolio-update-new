import {BaseQueryFn, createApi} from "@reduxjs/toolkit/query/react";
import {getBaseURL} from "@/lib/utils";
import {AxiosError, AxiosRequestConfig} from "axios";
import http, { HttpMethods } from "@/lib/http";
import { toast } from "@/hooks/use-toast";


export type ErrorToast = {
  status: 'error';
  title: string;
  description: string;
}

type ErrBag = ({
  message?: string;
  errors?: {
    message: string;
  }[];
})

const axiosBaseQuery = <T>(): BaseQueryFn<
    {
      url: string
      method: keyof HttpMethods
      payload?: T
      // payload?: AxiosRequestConfig['data']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, payload }) => {
    try {
      const result = await http[method](getBaseURL(url), payload)

      if (result?.data?.message) toast({
        status: "success",
        title: "Action successful",
        description: result.data.message
      })
      return { data: result.data }
    }
    catch ( axiosError ) {
      const err = axiosError as AxiosError

      if (err.response?.data) {
        const error = err.response.data as ErrBag

        console.log('Error details', error)

        if (error?.errors) {
          for (const currentError of error.errors) {
            toast({
              status: 'error',
              title: err.response?.statusText ?? '',
              description: currentError.message
            })
          }

        }
        else {
          toast({
            status: 'error',
            title: err.response?.statusText ?? "",
            description: error.message ?? err?.message
          })
        }
      }
			
      return {error: err.response?.data ?? err.message}
    }
  }

const api = createApi({
	reducerPath: "api",
	baseQuery: axiosBaseQuery(),
  endpoints: (build) => ({
    get: build.query({
      query: (data) => (data),
    }),

    post: build.mutation({
      query: (data) => (data),
    }),
  }),
});

export const { useGetQuery, usePostMutation } = api

export default api;
