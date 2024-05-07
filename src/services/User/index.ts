import { AxiosHttpClientAdapter } from "@/infra/adapters";
import { GetUserListProps, GetUserListResponseProps } from "./types";

const httpClient = new AxiosHttpClientAdapter();

export function getUserList(): GetUserListProps {
  return async function loadAll(): GetUserListResponseProps {
    return await httpClient.request({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
    });
  };
}
