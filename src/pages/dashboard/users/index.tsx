import { useState } from "react";
import { Pagination, Alert } from "@mui/material";
import { DashboardLayout } from "@/layouts/dashboard/DashboardLayout";
import {
  UserSearch,
  UserSkeleton,
  UserTable,
  UserDetailDrawer,
  useUsers,
  User,
} from "@/features/dashboard/users";

export default function UsersPage() {
  const {
    users,
    loading,
    error,
    page,
    setPage,
    query,
    handleQueryChange,
    totalPages,
  } = useUsers(10);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Users</h1>

      <div className="mb-4">
        <UserSearch value={query} onChange={handleQueryChange} />
      </div>

      {error && <Alert severity="error">{error}</Alert>}
      {loading && <UserSkeleton />}

      {!loading && users.length === 0 && (
        <Alert severity="info">No users found.</Alert>
      )}

      {!loading && users.length > 0 && (
        <>
          <UserTable users={users} onSelect={setSelectedUser} />
          <div className="flex justify-center mt-6">
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, p) => setPage(p)}
            />
          </div>
        </>
      )}

      {selectedUser && (
        <UserDetailDrawer
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </DashboardLayout>
  );
}
