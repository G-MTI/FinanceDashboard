
import { useAppContext } from "../context/AppContext";
import Item from "./item";
import {Link} from "react-router-dom";

const List = () => {
    const { transactions } = useAppContext();

    const visibleTransactions = transactions.slice (0, 6);

    return (
        <div className=" ">
            {visibleTransactions.length === 0 && (
                <p className="flex justify-center">No transactions</p>
            )}

            {visibleTransactions.map((t) => (
                <Item key={t.id} transaction={t} />
            ))}

        <Link to="/allTransactions" className="flex justify-center mt-8">
            <button className="bg-[var(--button)] hover:bg-[var(--hover)] cursor-pointer p-4 rounded-3xl text-white font-bold">
                See all transactions
            </button>
                
        </Link>
        </div>
    );
}

export default List;
