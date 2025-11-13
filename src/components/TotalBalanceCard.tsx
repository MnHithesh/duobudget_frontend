import { Box, Card, CardContent, Stack, Typography, Divider } from "../shared/Material";

interface CreditItem {
  label: string;
  amount: number;
}

interface TotalBalanceCardProps {
  total: number;
  main: number;
  savings: number;
  credits: CreditItem[];
  totalCredits : number;
}

export default function TotalBalanceCard({
  total,
  main,
  savings,
  credits,
  totalCredits,
}: TotalBalanceCardProps) {
  return (
    <Card
      sx={{
        mt: 2,
        border: "1px solid #e5e7eb",
        borderRadius: 3,
        bgcolor: "white",
        p: 2,
      }}
    >
      <CardContent>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{
            alignItems: "stretch",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 1 }}
            >
              Total Balance
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "success.main",
              }}
            >
              ₹ {total.toLocaleString()}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mt: 0.5 }}
            >
              All combined.
            </Typography>

            <Box
              sx={{
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                mt: 2,
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Main
                </Typography>
                <Typography variant="subtitle1" fontWeight={600}>
                  ₹ {main.toLocaleString()}
                </Typography>
              </Box>

              <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

              <Box textAlign="right">
                <Typography variant="body2" color="text.secondary">
                  Savings
                </Typography>
                <Typography variant="subtitle1" fontWeight={600}>
                  ₹ {savings.toLocaleString()}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* RIGHT — Credits */}
          <Box sx={{ flex: 1 }}>

            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 1 }}
            >
              Credit Card Bills
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "error.main",
              }}
            >
              ₹ {totalCredits.toLocaleString()}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mt: 0.5 }}
            >
              douBudget will show which was added only.
            </Typography>

            <Box
              sx={{
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                p: 2,
                mt: 2,
              }}
            >
              <Stack spacing={1.2}>
                {credits.map((credit, i) => (
                  <Stack
                    key={i}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      pb: i !== credits.length - 1 ? 1 : 0,
                      borderBottom:
                        i !== credits.length - 1
                          ? "1px solid #f3f4f6"
                          : "none",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "text.primary" }}
                    >
                      {credit.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600 }}
                    >
                      ₹ {credit.amount.toLocaleString()}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
