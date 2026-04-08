import { useAppContext } from "../context/AppContext";

const Budget = () => {
    const {transactions} = useAppContext();

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach((x) => {
        if (x.type === "Income") {
            totalIncome += x.utile
        }
        else if (x.type === "Expense") {
            totalExpense += x.utile
        };
    });


    const budget = totalIncome - totalExpense;

    return (
        <div>
            <h1>Budget</h1>
            <p>Budget: {budget}</p>
            <p>Total Income: {totalIncome}</p>
            <p>Total Expences: {totalExpense}</p>
        </div>
    )
}

export default Budget;
