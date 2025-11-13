import { Container } from "../shared/Material";
import TotalBalanceCard from "../components/TotalBalanceCard";
import RecentTransactionsCard from "../components/RecentTransactions";
import GoalsAndCategoriesSection from "../components/GoalsAndCategoriesSection";

const data = {
    total: 25000,
    main: 10000,
    savings: 15000,
    totalCredits: 30000,
    credits: [
        { label: "Axis Flipkart", amount: 15000 },
        { label: "Kotak Mahindra Indian Oil", amount: 10000 },
        { label: "Axis MyZone", amount: 5000 },
    ],
};

const txns = [
    { id: "t1", spentBy: "Preethi", src: "/assets/profiles/Preethi.png", title: "Groceries", date: "16 May", amount: -6000, color: "#f97316" },
    { id: "t2", spentBy: "Hithesh", src: "/assets/profiles/Hithesh.png", title: "Rent", date: "5 May", amount: -14000, color: "#ef4444" },
    { id: "t3", spentBy: "Hithesh", src: "/assets/profiles/Hithesh.png", title: "Electricity Bill", date: "5 May", amount: -300, color: "#ef4444" },
    { id: "t4", spentBy: "Hithesh", src: "/assets/profiles/Hithesh.png", title: "Water Bill", date: "5 May", amount: -200, color: "#ef4444" },
];

const legend = [
    { label: "Spent", value: 22000, color: "#ef4444" },
    { label: "Recurring", value: 5000, color: "#f59e0b" },
    { label: "Creditcard", value: 3000, color: "#3b82f6" },
];

const chartSeries = [
    { name: "Spend", data: [12000, 15000, 9000, 13000], color: "#ef4444" },
    { name: "Savings", data: [4000, 5000, 7000, 6000], color: "#10b981" },
];

const goals = [
    { id: "g1", title: "Renovations", budget: 10000 },
    { id: "g2", title: "Trip", budget: 13000 },
    { id: "g3", title: "Bike", budget: 110000 },
];

const categories = [
    { name: "Groceries", percent: 10, color: "#3b82f6" },
    { name: "Food", percent: 30, color: "#f59e0b" },
    { name: "Entertainment", percent: 25, color: "#10b981" },
];


export default function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50" >
            <Container maxWidth="lg" sx={{ mt: 6 , mb:4 }}>
                <TotalBalanceCard
                    total={data.total}
                    main={data.main}
                    savings={data.savings}
                    credits={data.credits}
                    totalCredits={data.totalCredits}
                />

                <RecentTransactionsCard
                    transactions={txns}
                    legend={legend}
                    chartSeries={chartSeries}
                    onViewAll={() => console.log("view all")}
                />

                <GoalsAndCategoriesSection
                    goals={goals}
                    categories={categories}
                    onAddGoal={() => console.log("Add Goal clicked")}
                />
            </Container>
        </div>
    );
}