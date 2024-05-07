/* eslint-disable @typescript-eslint/no-explicit-any */

export type HttpClientRequestProps = {
  url: string;
  method: "get" | "post" | "put" | "delete";
  data?: any;
};

export type HttpClientResponse<T = any> = {
  status?: number;
  data?: T;
};

export type HttpClientProps = {
  request: (data: HttpClientRequestProps) => Promise<HttpClientResponse>;
};
