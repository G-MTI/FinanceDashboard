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
            <div className="flex-col items-center justify-center gap-8 mb-4">
                <div className="flex justify-center items-center gap-4">
                    <p className="text-5xl font-bold">Balance:</p>
                    <p className={budget >= 0 ? "text-green-500 font-bold text-5xl" : "text-red-500 font-bold text-3xl"}>
                        {budget}€
                    </p>
                </div>
               
                <div className=" flex justify-center gap-4 font-bold mt-8 mb-8">
                    <p className=" mb-2 text-2xl">Total Income: {totalIncome}€</p>
                    <p className="text-2xl">Total Expences: {totalExpense}€</p>
                </div>
            </div>

            <div className="flex justify-center gap-8">
                <a href="#form" className="bg-blue-500 p-4 rounded-3xl text-white font-bold">
                    See transactions
                </a>
                <a href="#charts" className="bg-blue-500 p-4 rounded-3xl text-white font-bold">
                    See charts
                </a>
            </div>

        </div>
    )
}

export default Budget;
