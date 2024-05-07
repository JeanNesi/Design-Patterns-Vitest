import { HttpClientResponse } from "@/infra/adapters";

export type UserProps = {
  id: number;
  name: string;
  email: string;
};

export type GetUserListResponseProps = Promise<HttpClientResponse<UserProps[]>>;

export type GetUserListProps = () => GetUserListResponseProps;
