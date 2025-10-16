import { Box, Container, Link, Typography } from "../shared/Material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid #e0e0e0",
        bgcolor: "white",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 1 }}>
          <Link href="/about" underline="hover" color="text.secondary" sx={{ mx: 1 }}>
            About
          </Link>
          <Link href="/privacy" underline="hover" color="text.secondary" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          <Link href="/contact" underline="hover" color="text.secondary" sx={{ mx: 1 }}>
            Contact
          </Link>
        </Box>

        {/* Bottom text */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ fontSize: "0.75rem" }}
        >
          © {new Date().getFullYear()} DuoBudget • Made with ❤️ for smart couples
        </Typography>
      </Container>
    </Box>
  );
}
