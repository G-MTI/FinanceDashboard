
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
            <button className="bg-blue-500 p-4 rounded-3xl text-white font-bold">
                See All Transactions
            </button>
                
        </Link>
        </div>
    );
}

export default List;
