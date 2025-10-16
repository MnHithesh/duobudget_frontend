import { AppBar, Toolbar, Button, Box, Container } from "../shared/Material";

export default function Header() {
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
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{ textTransform: "none", fontWeight: 500 }}
                            href="/signup"
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
                    </Box>
                </Toolbar>

            </Container>
        </AppBar>
    );
}
