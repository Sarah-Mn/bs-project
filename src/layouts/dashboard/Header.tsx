import { AppBar, Toolbar, IconButton, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar className="flex justify-between">
        <IconButton onClick={onMenuClick} className="md:hidden">
          <MenuIcon />
        </IconButton>

        <div className="flex items-center gap-4">
          <Avatar alt="User" />
        </div>
      </Toolbar>
    </AppBar>
  );
}
