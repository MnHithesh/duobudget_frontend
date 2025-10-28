import * as React from "react";
import {
    Box, Typography, Step, StepLabel, Stepper, StepContent,
    Stack, Container, TextField, Radio, RadioGroup, FormControlLabel, Button,
    InputAdornment, IconButton
} from "../shared/Material";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "../shared/Snackbar/SnackbarContext";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const steps = ["Account Info", "Mode", "Finish"];

export default function SignUp() {
    const { showSnackbar } = useSnackbar();
    const [activeStep, setActiveStep] = React.useState(0);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [mode, setMode] = React.useState<"individual" | "couple">("individual");
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const navigate = useNavigate();

    const passwordsMatch =
        password.trim() !== "" &&
        confirmPassword.trim() !== "" &&
        password === confirmPassword;

    const canNextFromStep0 =
        email.trim() !== "" && password.trim() !== "" && passwordsMatch;

    const handleNext = () => {
        if (activeStep === 0 && !passwordsMatch) {
            showSnackbar("error", "Passwords do not match.");
            return;
        }

        if (activeStep === steps.length - 1) {
            showSnackbar("success", "Account created successfully!");
            navigate("/dashboard");
            return;
        }

        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => setActiveStep((prev) => prev - 1);
    const handleReset = () => {
        setActiveStep(0);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setMode("individual");
    };

    const getIllustration = () => {
        switch (activeStep) {
            case 0: return "/assets/illustrators/account.svg";
            case 1: return "/assets/illustrators/mode.svg";
            case 2: return "/assets/illustrators/finish.svg";
            default: return "/assets/illustrators/account.svg";
        }
    };

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems="center"
                justifyContent="space-between"
                spacing={4}
            >
                <Box sx={{ maxWidth: 480, width: "100%" }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                        Create your DuoBudget account
                    </Typography>

                    <Stepper activeStep={activeStep} orientation="vertical">
                        {/* STEP 1 */}
                        <Step>
                            <StepLabel>Account Info</StepLabel>
                            <StepContent>
                                <Stack spacing={2}>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        fullWidth
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    {/* Password Field with toggle */}
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

                                    {/* Confirm Password Field with toggle */}
                                    <TextField
                                        label="Confirm Password"
                                        type={showConfirmPassword ? "text" : "password"}
                                        fullWidth
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        error={confirmPassword !== "" && !passwordsMatch}
                                        helperText={
                                            confirmPassword !== "" && !passwordsMatch
                                                ? "Passwords must match."
                                                : " "
                                        }
                                        slotProps={{
                                            input: {
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                                                            edge="end"
                                                            aria-label="toggle confirm password visibility"
                                                        >
                                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            },
                                        }}
                                    />
                                </Stack>

                                <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        disabled={!canNextFromStep0}
                                    >
                                        Next
                                    </Button>
                                </Box>
                            </StepContent>
                        </Step>

                        {/* STEP 2 */}
                        <Step>
                            <StepLabel>Mode</StepLabel>
                            <StepContent>
                                <Typography sx={{ mb: 2 }}>
                                    How would you like to use DuoBudget? You can change this later.
                                </Typography>
                                <RadioGroup
                                    value={mode}
                                    onChange={(e) =>
                                        setMode(e.target.value as "individual" | "couple")
                                    }
                                >
                                    <FormControlLabel
                                        value="individual"
                                        control={<Radio />}
                                        label="For myself (Individual)"
                                    />
                                    <FormControlLabel
                                        value="couple"
                                        control={<Radio />}
                                        label="With my partner (Couple)"
                                    />
                                </RadioGroup>
                                <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                                    <Button onClick={handleBack}>Back</Button>
                                    <Button variant="contained" onClick={handleNext}>
                                        Next
                                    </Button>
                                </Box>
                            </StepContent>
                        </Step>

                        {/* STEP 3 */}
                        <Step>
                            <StepLabel>Finish</StepLabel>
                            <StepContent>
                                <Box>
                                    <Typography variant="h6" sx={{ mb: 1.5 }}>
                                        You’re all set 🎉
                                    </Typography>
                                    <Typography color="text.secondary">
                                        Your account will be created.
                                        {mode === "couple" && " You can invite your partner from your dashboard."}
                                    </Typography>
                                </Box>
                                <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                                    <Button onClick={handleBack}>Back</Button>
                                    <Button onClick={handleReset}>Reset</Button>
                                    <Button variant="contained" color="success" onClick={handleNext}>
                                        Finish
                                    </Button>
                                </Box>
                            </StepContent>
                        </Step>
                    </Stepper>
                </Box>

                {/* Right: Illustration */}
                <Box
                    component="img"
                    src={getIllustration()}
                    alt="Illustration"
                    sx={{
                        maxWidth: 420,
                        width: "100%",
                        height: "auto",
                        transition: "0.3s ease",
                    }}
                />
            </Stack>
        </Container>
    );
}
