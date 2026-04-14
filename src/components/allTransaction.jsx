
import { useAppContext } from "../context/AppContext";
import Item from "./item";

const AllTransaction = () => {
    const { delAllTransactions} = useAppContext();
    const { transactions } = useAppContext();

    return (
        <div className=" flex-row justify-center">
            
            {transactions.length === 0 && (
                <p className="flex justify-center">No transactions</p>
            )}
            {transactions.length !== 0 && (
                <button onClick={delAllTransactions} className="bg-red-500 text-white p-2 rounded">
                    Clear Transactions
                </button>
            )}
            
            {transactions.map((t) => (
                <>
                    <Item key={t.id} transaction={t} />
                </>
            ))}
        </div>
    );
}

export default AllTransaction;