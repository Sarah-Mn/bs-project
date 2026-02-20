import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import { User } from "../types";
import { useRouter } from "next/router";

interface Props {
  users: User[];
}

export function UserTable({ users }: Props) {
  const router = useRouter();
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>User</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow
            key={user.id}
            hover
            className="cursor-pointer"
            onClick={() => {
              router.push(`/dashboard/users/${user.id}`);
            }}
          >
            <TableCell className="flex items-center gap-3">
              <Avatar src={user.image} />
              {user.firstName} {user.lastName}
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
