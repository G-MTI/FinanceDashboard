import { useAppContext } from "../context/AppContext";
import {
    PieChart,
    Pie,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    XAxis,
    YAxis,
} from "recharts";

const Charts = () => {
    const { transactions } = useAppContext();

    const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384", "#9966FF"];

    const income = transactions
        .filter((t) => t.type === "Income")
        .reduce((acc, t) => acc + t.utile, 0);

    const expense = transactions
        .filter((t) => t.type === "Expense")
        .reduce((acc, t) => acc + t.utile, 0);

    const categoryExpense = transactions
        .filter((t) => t.type === "Expense")
        .reduce((acc, t) => {
            if (!acc[t.category]) {
              acc[t.category] = 0;
            }
            acc[t.category] += t.utile;
            return acc;
        }, {});
    const categoryExpenseData = Object.keys(categoryExpense).map((key, index) => ({
        name: key,
        value: categoryExpense[key],
        fill: colors[index % colors.length],
    }));

    const categoryIncome = transactions
        .filter((t) => t.type === "Income")
        .reduce((acc, t) => {
            if (!acc[t.category]) {
              acc[t.category] = 0;
            }
            acc[t.category] += t.utile;
            return acc;
        }, {});
    const categoryIncomeData = Object.keys(categoryIncome).map((key, index) => ({
        name: key,
        value: categoryIncome[key],
        fill: colors[index % colors.length],
    }));

    const data = [
        { name: "Income", amount: income, fill: "#22c55e" },
        { name: "Expense", amount: expense, fill: "#ef4444" },
    ];

    console.log({categoryExpense });

    return (
        <div>
            <h1>Charts</h1>
            <div className="flex justify-around">
                <div>
                    <h3>Expense by category</h3>
                    <PieChart width={300} height={400}>
                        <Pie
                            data={categoryExpenseData}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            dataKey="value"
                            label
                        />  
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>

                <BarChart width={300} height={300} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" />
                </BarChart>

                <div>
                    <h3>Income by category</h3>
                    <PieChart width={300} height={400}>
                        <Pie
                            data={categoryIncomeData}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            dataKey="value"
                            label
                        />  
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
            </div>
        </div>
      );
};

export default Charts;