import React from "react";
import {
    Box,
    Typography,
    Button,
    Stack,
    Container,
    TextField,
    IconButton,
    InputAdornment,
    Divider,
    Tooltip,
} from "../shared/Material";
import { Link } from "react-router-dom";
import { useSnackbar } from "../shared/Snackbar/SnackbarContext";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from '@mui/icons-material/Google';
import { styled } from '@mui/material/styles';
import { useAuth } from "../context/AuthContext";

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    color: (theme.vars || theme).palette.text.secondary,
    '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const { signin } = useAuth();
    const { showSnackbar } = useSnackbar();


    const loginRequest = () => {
        const userData = {
            name: "Hithesh Nandeesh",
            email: email,
            mode: "couple" as "couple",
        };

        signin(userData);

        showSnackbar("success", "Logged in successfully!");
    }

    const isFormValid = email.trim() !== "" && password.trim() !== "";

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems="center"
                justifyContent="space-between"
                spacing={4}
            >
                {/* Left: Illustration */}
                <Box
                    component="img"
                    src="/assets/illustrators/save.svg"
                    alt="Illustration"
                    sx={{
                        maxWidth: 420,
                        width: "100%",
                        height: "auto",
                        transition: "0.3s ease",
                    }}
                />

                {/* Right: Form */}
                <Box sx={{ maxWidth: 480, width: "100%" }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                        Login to your DuoBudget account
                    </Typography>
                    <Stack spacing={2}>
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* Password field with show/hide icon */}
                        <TextField
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword((prev) => !prev)}
                                                edge="end"
                                                aria-label="toggle password visibility"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

                        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                            <Root>
                                <Button
                                    variant="contained"
                                    onClick={loginRequest}
                                    disabled={!isFormValid}
                                    fullWidth
                                >
                                    Login
                                </Button>

                                <Divider>Or Login with</Divider>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <Tooltip title="Google">
                                        <IconButton
                                            edge="end"
                                            aria-label="Google OAuth"
                                            sx={{
                                                border: "1px solid",
                                                borderColor: "divider",
                                                p: 1.2,
                                                "&:hover": { backgroundColor: "grey.100" },
                                            }}
                                        >
                                            <GoogleIcon fontSize="medium" />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Typography sx={{ fontWeight: 600, mb: 3 }}>
                                    Don’t have an account?{" "}
                                    <Link
                                        to="/registration"
                                        style={{
                                            textDecoration: "none",
                                            color: "#1976d2",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Sign Up here
                                    </Link>
                                </Typography>
                            </Root>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
}
