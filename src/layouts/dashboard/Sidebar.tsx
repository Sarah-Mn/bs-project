import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import Link from "next/link";
import { CSSObject, Theme } from "@mui/material/styles";

const menuItems = [
  { label: "Dashboard", icon: <DashboardIcon />, href: "/dashboard" },
  { label: "Users", icon: <PeopleIcon />, href: "/dashboard/users" },
  { label: "Products", icon: <InventoryIcon />, href: "/dashboard/products" },
  { label: "Games", icon: <VideogameAssetIcon />, href: "/dashboard/games" },
  {
    label: "The Select",
    icon: <VideogameAssetIcon />,
    href: "/dashboard/select",
  },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  isMobile: boolean;
}
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 10px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 10px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export function Sidebar({ open, onClose, isMobile }: SidebarProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      variant={isMobile ? "temporary" : "permanent"}
    >
      <div className="w-60 p-4">
        <List>
          {menuItems.map((item) => (
            <Link href={item.href} key={item.label}>
              <ListItemButton key={item.label}>
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                      mr: 3,
                    },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </div>
    </Drawer>
  );
}
