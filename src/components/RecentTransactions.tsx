import { useMemo } from "react";
import {
    Box,
    Card,
    CardContent,
    Stack,
    Typography,
    Avatar,
    Tooltip,
    Button,
} from "../shared/Material";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export interface Txn {
    id: string;
    title: string;
    date?: string;
    amount: number;
    color?: string;
    src?: string;
    spentBy?: string;
}

export interface LegendItem {
    label: string;
    value: number;
    color: string;
}

export interface ChartSeries {
    name: string;
    data: number[];
    color?: string;
}

interface RecentTransactionsCardProps {
    title?: string;
    transactions: Txn[];
    legend: LegendItem[];
    onViewAll?: () => void;
    chartSeries?: ChartSeries[]; // optional override
}

export default function RecentTransactionsCard({
    title = "Recent Transactions",
    transactions,
    onViewAll,
    chartSeries,
}: RecentTransactionsCardProps) {
    // Weekly categories
    const chartCategories = ["Week 1", "Week 2", "Week 3", "Week 4"];

    // Default series: Spend vs Savings
    const defaultSeries: ChartSeries[] =
        chartSeries ?? [
            { name: "Spend", data: [12000, 15000, 9000, 13000], color: "#ef4444" }, // red
            { name: "Savings", data: [4000, 5000, 7000, 6000], color: "#10b981" }, // green
        ];

    const series = defaultSeries;

    const chartOptions = useMemo<Highcharts.Options>(() => {
        return {
            chart: {
                type: "line",
                backgroundColor: "transparent",
                height: 240,
                spacing: [10, 10, 15, 10],
            },
            title: { text: undefined },
            credits: { enabled: false },
            xAxis: {
                categories: chartCategories,
                tickColor: "#e5e7eb",
                lineColor: "#e5e7eb",
                labels: { style: { color: "#6b7280", fontWeight: "500" } },
            },
            yAxis: {
                title: { text: undefined },
                gridLineColor: "#f3f4f6",
                labels: {
                    formatter: function () {
                        // @ts-ignore
                        return `₹ ${Number(this.value).toLocaleString()}`;
                    },
                    style: { color: "#6b7280", fontWeight: "500" },
                },
            },
            tooltip: {
                shared: true,
                backgroundColor: "#fff",
                borderColor: "#e5e7eb",
                borderRadius: 6,
                useHTML: true,
                headerFormat: `<div style="font-weight:600;margin-bottom:6px">{point.key}</div>`,
                pointFormatter: function () {
                    // @ts-ignore
                    const name = this.series.name;
                    // @ts-ignore
                    const val = this.y;
                    return `<div style="color:${this.series.color};margin:2px 0">
                    <strong>${name}:</strong> ₹ ${Number(val).toLocaleString()}
                  </div>`;
                },
            },
            legend: {
                align: "center",
                verticalAlign: "bottom",
                itemStyle: { color: "#374151", fontWeight: "600" }, // fontWeight is string
            },
            plotOptions: {
                line: {
                    lineWidth: 3,
                    marker: { radius: 4, symbol: "circle" },
                },
            },
            series: series.map((s) => ({
                type: "line" as const,
                name: s.name,
                data: s.data,
                color: s.color,
            })),
        };
    }, [chartCategories, series]);

    return (
        <Card
            sx={{
                mt: 4,
                border: "1px solid #e5e7eb",
                borderRadius: 3,
                bgcolor: "white",
            }}
        >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems="stretch">
                    {/* LEFT: Recent transactions */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                            {title}
                        </Typography>

                        <Box sx={{ border: "1px solid #f3f4f6", borderRadius: 2, p: 1 }}>
                            <Stack spacing={1}>
                                {transactions.map((t, i) => (
                                    <Box
                                        key={t.id}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            py: 1,
                                            px: 1,
                                            borderBottom: i !== transactions.length - 1 ? "1px solid #f8fafc" : "none",
                                        }}
                                    >
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                            <Tooltip title={`Spent by ${t.spentBy}`}>
                                                <Avatar
                                                    sx={{
                                                        width: 36,
                                                        height: 36,
                                                        bgcolor: t.color ?? "primary.main",
                                                        fontSize: 14,
                                                    }}
                                                    alt={t.spentBy}
                                                    src={t.src}
                                                >
                                                </Avatar>
                                            </Tooltip>


                                            <Box>
                                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                                    {t.title}
                                                </Typography>
                                                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                                    {t.date}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 700,
                                                color: t.amount < 0 ? "error.main" : "success.main",
                                            }}
                                        >
                                            {t.amount < 0 ? "− " : ""}
                                            ₹ {Math.abs(t.amount).toLocaleString()}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>

                            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                <Button
                                    variant="outlined"
                                    onClick={onViewAll}
                                    sx={{
                                        borderRadius: 6,
                                        px: 3,
                                        textTransform: "none",
                                        fontWeight: 600,
                                    }}
                                >
                                    View more
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    {/* RIGHT: Spend vs Savings chart */}
                    <Box
                        sx={{
                            width: { xs: "100%", md: 540 },
                            flexShrink: 0,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "stretch",
                            justifyContent: "flex-start",
                        }}
                    >
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                            Spend vs Savings (Monthly: weekly)
                        </Typography>

                        <Box sx={{ border: "1px solid #f3f4f6", borderRadius: 2, p: 1 }}>
                            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                        </Box>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}
