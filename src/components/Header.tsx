import * as React from 'react';
import { AppBar, Toolbar, Button, Box, Container, Avatar, Tooltip, IconButton, Divider, Menu, MenuItem } from "../shared/Material";
import { useAuth } from "../context/AuthContext";
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function Header({ variant = "app" }: { variant?: "app" | "public" }) {
    const { user, signout } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                bgcolor: "white",
                color: "black",
                borderBottom: "1px solid #e0e0e0",
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Left: Logo */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <a href="/" style={{ display: "inline-flex", alignItems: "center" }}>
                            <Box
                                component="img"
                                src="/assets/duoBudgetLogo.svg"
                                alt="DuoBudget Logo"
                                sx={{
                                    height: 80,
                                    width: "auto",
                                    display: "block",
                                }}
                            />
                        </a>
                    </Box>

                    {/* Right: Buttons */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>

                        {variant === "public" && !user && (
                            <>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    sx={{ textTransform: "none", fontWeight: 500 }}
                                    href="/registration"
                                >
                                    Sign up
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    sx={{ textTransform: "none", fontWeight: 500 }}
                                    href="/login"
                                >
                                    Log in
                                </Button>
                            </>
                        )}
                        {variant === "app" && user && (
                            <>
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar
                                            sx={{
                                                width: 36,
                                                height: 36,
                                                bgcolor: "#f97316",
                                                fontSize: 14,
                                            }}
                                            alt= 'Hithesh'
                                            src= '/assets/profiles/Hithesh.png'
                                        >
                                        </Avatar>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Avatar /> Profile
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add Partner
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={signout}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </>
                        )}
                    </Box>
                </Toolbar>

            </Container>
        </AppBar>
    );
}
