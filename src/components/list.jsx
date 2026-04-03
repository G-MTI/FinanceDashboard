
import { useAppContext } from "../context/AppContext";
import Item from "./item";

const list = () => {
    const { transactions } = useAppContext();

    return (
        <div className="">
            {transactions.length === 0 && (
                <p className="">No transactions</p>
            )}

            {transactions.map((t) => (
                <Item key={t.id} transaction={t} />
            ))}
        </div>
    );
}

export default list;
