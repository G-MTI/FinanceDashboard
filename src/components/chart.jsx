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
    const { transactions, categories } = useAppContext();

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
        fill: categories.find((c) => c.categoryName === key)?.categoryColor || "#a5a5a5",
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
        fill: categories.find((c) => c.categoryName === key)?.categoryColor || "#a5a5a5",
    }));

    const data = [
        { name: "Income", amount: income, fill: "#22c55e" },
        { name: "Expense", amount: expense, fill: "#ef4444" },
    ];

    console.log({categoryExpense });

    return ( <section id="charts" className="pt-32">
            <h1 className="font-bold text-3xl flex justify-center mb-8">Charts</h1>
            {transactions.length === 0 && (
                <p className="flex justify-center">No transaction to show</p>
            )}
            {transactions.length !==0 && (
                <div className="flex flex-wrap justify-center gap-8">
                    <div>
                        <h3 className="flex justify-center">Expense by category</h3>
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
                        <h3 className="flex justify-center">Income by category</h3>
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
            )}
            
        </section>
      );
};

export default Charts;