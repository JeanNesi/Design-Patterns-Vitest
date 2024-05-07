import { useCallback, useEffect, useState } from "react";
import { UserListProps } from "./user-list";
import { UserProps } from "@/services/User/types";

export const useUserList = ({ loadUserList }: UserListProps) => {
  const [users, setUsers] = useState<UserProps[]>([]);

  const getUsers = useCallback(async () => {
    const res = await loadUserList();

    setUsers(res.data ?? []);
  }, [loadUserList]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return {
    users,
  };
};
