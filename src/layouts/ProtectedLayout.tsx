import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MoneyIcon from '@mui/icons-material/Money';
import FlagIcon from '@mui/icons-material/Flag';

import { SpeedDial, Box, SpeedDialAction } from "../shared/Material";

const actions = [
  { icon: <SpaceDashboardIcon />, name: "Dashboard", id: "dashboard", path: "/dashboard", color: "#0284c7" },
  { icon: <MoneyIcon />, name: "Manage Budget", id: "budget", path: "/budget", color: "#16a34a" },
  { icon: <FlagIcon />, name: "Goal", id: "goal", path: "/goals", color: "#d97706" },
];

export default function ProtectedLayout() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function handleAction(item: any) {
    if (item.path) navigate(item.path);
    setOpen(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header variant="app" />

      <main className="flex-1 px-6 py-6">
        <Outlet />
      </main>

      <Footer />

      <Box
        sx={{
          position: "fixed",
          right: { xs: 12, md: 24 },
          bottom: { xs: 12, md: 24 },
          zIndex: (theme: any) => theme.zIndex.tooltip + 1,
        }}
      >
        <SpeedDial
          ariaLabel="Quick actions"
          icon={<MenuOpenIcon />}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          direction="up"
        >
          {actions.map((action) => {
            const isActive = location.pathname === action.path;

            return (
              <SpeedDialAction
                key={action.id}
                icon={action.icon}
                onClick={() => handleAction(action)}
                slotProps={{
                  fab: {
                    sx: {
                      bgcolor: isActive ? action.color : "white",
                      color: isActive ? "white" : "inherit",
                      border: isActive ? `2px solid ${action.color}` : "1px solid #e5e7eb",
                      boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
                      transform: isActive ? "scale(1.08)" : "scale(1)",
                      transition: "all .25s ease",
                      "&:hover": {
                        bgcolor: isActive ? action.color : "#f3f4f6",
                      },
                    },
                    "aria-label": action.name,
                    size: "small",
                  },
                  tooltip: {
                    title: action.name,
                    placement: "left",
                  },
                }}
              />
            );
          })}
        </SpeedDial>
      </Box>
    </div>
  );
}
