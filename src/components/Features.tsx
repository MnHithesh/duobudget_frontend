
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "../shared/Material";
import Video from "../shared/Video";


const features = [
  "Both partners can log spends",
  "AI finds money leaks",
  "Get category-wise breakdowns",
  "Suggestions on where to save"
];

export default function FeaturesSection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 8 },
            alignItems: "center"
          }}
        >
          {/* Left side - Text content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 1,
                fontSize: { xs: "1.75rem", md: "2.5rem" }
              }}
            >
              One Interface. Two People.
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 4,
                fontSize: { xs: "1.75rem", md: "2.5rem" }
              }}
            >
              Zero Confusion
            </Typography>

            <List sx={{ py: 0 }}>
              {features.map((feature, index) => (
                <ListItem
                  key={index}
                  sx={{
                    py: 1,
                    px: 0,
                    alignItems: "flex-start"
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 24, mt: 1.5 }}>
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "text.primary",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={feature}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Right side - Mockup */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 620,
                bgcolor: "white",
                border: "2px solid #e5e7eb",
                borderRadius: 3,
                p: 3,
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
              }}
            >
              {/* Header */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  fontSize: "1.1rem"
                }}
              >
                AI Insights
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 100,
                  mb: 2,
                  fontSize: "1rem"
                }}
              >
                Our AI analyzes your expenses to reveal patterns and savings opportunities.
              </Typography>
              <Video videoIdOrUrl="https://www.youtube.com/watch?v=AquY0u0agFw" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}