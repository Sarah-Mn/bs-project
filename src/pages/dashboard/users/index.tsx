import { useCallback, useEffect, useState } from "react";
import { Pagination, Alert } from "@mui/material";
import { User } from "@/types/user";
import { DashboardLayout } from "@/layouts/dashboard/DashboardLayout";
import { UserSearch } from "@/components/dashboard/users/UserSearch";
import { UserSkeleton } from "@/components/dashboard/users/UserSkeleton";
import { UserTable } from "@/components/dashboard/users/UsersTable";
import { UserDetailDrawer } from "@/components/dashboard/users/UserDetailDrawer";
import { fetchUsers } from "@/services/dashboard/users/usersApi";
import { AxiosError } from "axios";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const limit = 10;

  const loadUsers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchUsers(page, limit, query);
      setUsers(data.users);
    } catch (error: unknown) {
      const message =
        error instanceof AxiosError
          ? error.message
          : "An error occurred while fetching users";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [page, query]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Users</h1>

      <div className="mb-4">
        <UserSearch value={query} onChange={setQuery} />
      </div>

      {error && <Alert severity="error">{error}</Alert>}
      {loading ? (
        <UserSkeleton />
      ) : (
        <>
          <UserTable users={users} onSelect={setSelectedUser} />
          <div className="flex justify-center mt-6">
            <Pagination
              count={10}
              page={page}
              onChange={(_, p) => setPage(p)}
            />
          </div>
        </>
      )}

      <UserDetailDrawer
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </DashboardLayout>
  );
}
