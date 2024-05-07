import { getUserList } from "@/services/User";
import { UserList } from "./user-list";

export const UserListScreen = () => {
  return <UserList loadUserList={getUserList()} />;
};
