/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  HttpClientProps,
  HttpClientRequestProps,
  HttpClientResponse,
} from "./types";

export class AxiosHttpClientAdapter implements HttpClientProps {
  async request({
    url,
    method,
  }: HttpClientRequestProps): Promise<HttpClientResponse> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url,
        method,
      });
    } catch (error) {
      const _error = error as AxiosError<{ message: string }>;
      throw new Error(_error?.response?.data.message);
    }

    return {
      status: axiosResponse?.status,
      data: axiosResponse?.data,
    };
  }
}
