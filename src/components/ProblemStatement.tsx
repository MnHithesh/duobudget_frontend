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
          spacing={0}
          sx={{ 
            position: "relative",
            alignItems: "center",
          }}
        >
          {/* Step 1: Spend */}
          <Box sx={{ textAlign: "center", flex: 1, position: "relative" }}>
            <Box
              component="img"
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

          {/* Arrow 1 */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: "80px",
              height: "60px",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <svg
              width="80"
              height="60"
              viewBox="0 0 80 60"
              style={{ overflow: "visible" }}
            >
              <path
                d="M 5 30 Q 40 5, 70 30"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2"
                strokeDasharray="4 4"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="8"
                  to="0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
              <polygon
                points="70,30 65,26 65,34"
                fill="#7c3aed"
              />
            </svg>
          </Box>

          {/* Step 2: Input */}
          <Box sx={{ textAlign: "center", flex: 1, position: "relative" }}>
            <Box
              component="img"
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

          {/* Arrow 2 */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: "80px",
              height: "60px",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <svg
              width="80"
              height="60"
              viewBox="0 0 80 60"
              style={{ overflow: "visible" }}
            >
              <path
                d="M 5 30 Q 40 55, 70 30"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2"
                strokeDasharray="4 4"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="8"
                  to="0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
              <polygon
                points="70,30 65,26 65,34"
                fill="#7c3aed"
              />
            </svg>
          </Box>

          {/* Step 3: AI Suggestions */}
          <Box sx={{ textAlign: "center", flex: 1, position: "relative" }}>
            <Box
              component="img"
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

          {/* Arrow 3 */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: "80px",
              height: "60px",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <svg
              width="80"
              height="60"
              viewBox="0 0 80 60"
              style={{ overflow: "visible" }}
            >
              <path
                d="M 5 30 Q 40 5, 70 30"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2"
                strokeDasharray="4 4"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="8"
                  to="0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
              <polygon
                points="70,30 65,26 65,34"
                fill="#7c3aed"
              />
            </svg>
          </Box>

          {/* Step 4: Optimize */}
          <Box sx={{ textAlign: "center", flex: 1 }}>
            <Box
              component="img"
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