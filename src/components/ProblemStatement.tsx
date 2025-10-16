import {
    Box,
    Container,
    Stack,
    Typography,
} from "../shared/Material";

export default function ProblemSection() {
    return (
        <Box
            sx={{
                mt: 6,
                bgcolor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                py: { xs: 3, sm: 4 },
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: { xs: 2, sm: 3 }, textAlign: "center" }}
                >
                    How it works???
                </Typography>

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={8}
                >
                    <Box sx={{ textAlign: "center" }}>
                        <Box component="img"
                            src="/assets/illustrators/spend.svg"
                            alt="spend illustration"
                            sx={{
                                maxWidth: 400,
                                width: "100%",
                                height: "200px",
                            }}
                        />
                        <Typography variant="body1" sx={{ mt: 1, fontWeight: 500 }}>
                            Spend
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Box component="img"
                            src="/assets/illustrators/moniter.svg"
                            alt="input illustration"
                            sx={{
                                maxWidth: 400,
                                width: "100%",
                                height: "200px",
                            }}
                        />
                        <Typography variant="body1" sx={{ mt: 1, fontWeight: 500 }}>
                            Input
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Box component="img"
                            src="/assets/illustrators/ai.svg"
                            alt="ai illustration"
                            sx={{
                                maxWidth: 400,
                                width: "100%",
                                height: "200px",
                            }}
                        />
                        <Typography variant="body1" sx={{ mt: 1, fontWeight: 500 }}>
                            AI Suggestions
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Box component="img"
                            src="/assets/illustrators/optimize.svg"
                            alt="optimize illustration"
                            sx={{
                                maxWidth: 500,
                                width: "100%",
                                height: "200px",
                            }}
                        />
                        <Typography variant="body1" sx={{ mt: 1, fontWeight: 500 }}>
                            Optimize
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}