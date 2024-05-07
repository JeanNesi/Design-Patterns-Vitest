import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUserList } from "./use-user-list";
import { HttpClientResponse } from "@/infra/adapters/types";
import { UserProps } from "@/services/User/types";

export type UserListProps = {
  loadUserList: () => Promise<HttpClientResponse<UserProps[]>>;
};

export const UserList = ({ loadUserList }: UserListProps) => {
  const { users } = useUserList({ loadUserList });

  return (
    <React.Fragment>
      <Table>
        <TableCaption>Usuários</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nome</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </React.Fragment>
  );
};
