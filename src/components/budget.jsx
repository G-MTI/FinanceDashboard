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
        <div className=" min-h-screen flex flex-col justify-center items-center overflow-hidden max-w-screen">
            <div className="flex flex-col items-center justify-center mb-4">
                <div className="flex justify-center items-center gap-4">
                    <p className="text-5xl font-bold">Balance:</p>
                    <p className={budget >= 0 ? "text-green-500 font-bold text-5xl" : "text-red-500 font-bold text-3xl"}>
                        {budget}€
                    </p>
                </div>
               
                <div className=" flex justify-center gap-8 font-bold mt-8 mb-4">
                    <p className=" mb-2 text-2xl">Total Income: {totalIncome}€</p>
                    <p className="text-2xl">Total Expences: {totalExpense}€</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                <a href="#form" className="bg-[var(--button)] hover:bg-[var(--hover)] p-4 rounded-3xl text-white font-bold">
                    See transactions
                </a>
                <a href="#charts" className="bg-[var(--button)] hover:bg-[var(--hover)] p-4 rounded-3xl text-white font-bold">
                    See charts
                </a>
            </div>

        </div>
    )
}

export default Budget;
