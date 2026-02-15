import { Drawer, Typography, Divider } from "@mui/material";
import { User } from "../types";

interface Props {
  user: User | null;
  onClose: () => void;
}

export function UserDetailDrawer({ user, onClose }: Props) {
  if (!user) return null;

  return (
    <Drawer
      data-testid="user-detail-drawer"
      anchor="right"
      open={!!user}
      onClose={onClose}
    >
      <div className="w-80 p-4 space-y-4">
        <Typography variant="h6">
          {user.firstName} {user.lastName}
        </Typography>

        <Divider data-testid="divider" />

        <Typography variant="subtitle2">Contact</Typography>
        <p>{user.email}</p>
        <p>{user.phone}</p>

        <Divider data-testid="divider" />

        <Typography variant="subtitle2">Company</Typography>
        <p>{user.company.name}</p>
        <p>{user.company.title}</p>

        <Divider data-testid="divider" />

        <Typography variant="subtitle2">Address</Typography>
        <p>
          {user.address.city}, {user.address.country}
        </p>
      </div>
    </Drawer>
  );
}
