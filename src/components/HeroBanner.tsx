import { Box, Button, Container, Typography, Stack } from "../shared/Material";

export default function HeroBanner() {
  return (
    <Box
      sx={{
        bgcolor: "#f9fafb",
        borderRadius: 3,
        py: { xs: 6, sm: 10 },
        px: { xs: 3, sm: 6 },
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
        >
          {/* Left Section */}
          <Box sx={{ maxWidth: 480 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 2, lineHeight: 1.2 }}
            >
              Track. Learn. <br /> Save — Together.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", mb: 4 }}
            >
              One interface for couples to add spends and get personalized AI
              advice to stop money leakage.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "none",
                  px: 3,
                  py: 1,
                  fontWeight: 500,
                  borderRadius: 2,
                }}
              >
                Sign up
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  textTransform: "none",
                  px: 3,
                  py: 1,
                  fontWeight: 500,
                  borderRadius: 2,
                }}
              >
                Log in
              </Button>
            </Stack>
          </Box>

          {/* Right Section - Illustration */}
          <Box
            component="img"
            src="/assets/illustrators/learn.svg" 
            alt="Couple budget illustration"
            sx={{
              maxWidth: 400,
              width: "100%",
              height: "auto",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
