import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
  LinearProgress,
} from "../shared/Material";

interface Goal {
  id: string;
  title: string;
  budget: number;
}

interface Category {
  name: string;
  percent: number;
  color?: string;
}

interface Props {
  goals: Goal[];
  categories: Category[];
  onAddGoal?: () => void;
}

export default function GoalsAndCategoriesSection({
  goals,
  categories,
  onAddGoal,
}: Props) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={3}
      sx={{ mt: 4, alignItems: "stretch" }}
    >
      {/* ------------------ Left: Goals Card ------------------ */}
      <Card
        sx={{
          flex: 1,
          border: "1px solid #e5e7eb",
          borderRadius: 3,
          bgcolor: "white",
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 2 }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Goals
            </Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={onAddGoal}
              sx={{ textTransform: "none", borderRadius: 2 }}
            >
              Add Goal
            </Button>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            sx={{ overflowX: "auto", pb: 1 }}
          >
            {goals.map((goal) => (
              <Card
                key={goal.id}
                variant="outlined"
                sx={{
                  flex: "0 0 180px",
                  borderRadius: 2,
                  p: 2,
                  minHeight: 120,
                  bgcolor: "#fafafa",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, mb: 1 }}
                >
                  {goal.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Budget
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, color: "success.main" }}
                >
                  ₹ {goal.budget.toLocaleString()}
                </Typography>
              </Card>
            ))}
          </Stack>
        </CardContent>
      </Card>

      <Card
        sx={{
          flex: 1,
          border: "1px solid #e5e7eb",
          borderRadius: 3,
          bgcolor: "white",
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            Top Categories
          </Typography>

          <Stack spacing={2}>
            {categories.map((cat) => (
              <Box key={cat.name}>
                <Typography
                  variant="body2"
                  sx={{ mb: 0.5, fontWeight: 500 }}
                >
                  {cat.name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={cat.percent}
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        "& .MuiLinearProgress-bar": {
                          bgcolor: cat.color || "primary.main",
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, width: 36, textAlign: "right" }}
                  >
                    {cat.percent}%
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
