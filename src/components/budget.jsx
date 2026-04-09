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
            <div className="flex flex-row items-center justify-center gap-8 mb-4">
                <div className=" flex-col bg-white rounded-3xl p-4 text-center text-black">
                    <p className="text-2xl font-bold">Budget:</p>
                    <p className={budget >= 0 ? "text-green-500 font-bold text-2xl" : "text-red-500 font-bold text-2xl"}>
                        {budget}€
                    </p>
                </div>
                <div className="font-bold">
                    <p className=" mb-2">Total Income: {totalIncome}€</p>
                    <p className="">Total Expences: {totalExpense}€</p>
                </div>
            </div>

            <div className="flex flex-row justify-center gap-8">
                <a href="#form" className="bg-blue-500 p-4 rounded-3xl text-white">
                    See transactions
                </a>
                <a href="#charts" className="bg-blue-500 p-4 rounded-3xl text-white">
                    See charts
                </a>
            </div>

        </div>
    )
}

export default Budget;
