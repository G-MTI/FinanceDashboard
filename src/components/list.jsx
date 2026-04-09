
import { useAppContext } from "../context/AppContext";
import Item from "./item";

const list = () => {
    const { transactions } = useAppContext();

    return (
        <div className=" flex-row justify-center">
            {transactions.length === 0 && (
                <p className="flex justify-center">No transactions</p>
            )}

            {transactions.map((t) => (
                <Item key={t.id} transaction={t} />
            ))}
        </div>
    );
}

export default list;
