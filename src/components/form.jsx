import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const form = () => {
    const {addTransaction} = useAppContext();

    const [utile, setUtile] = useState("");
    const [type, setType] = useState("Expense");
    const [category, setCategory] = useState("");

    const handleInvio = (x) => {
        x.preventDefault();

        if (!utile || !category) return;

        const newTransaction = {
            id: Date.now(),
            utile: parseFloat(utile),
            type,
            category,
        };

        addTransaction(newTransaction);

        setUtile("");
        setType("Expense");
        setCategory("");
    };

    return (
        <form 
        onSubmit={handleInvio} 
            className=""
        >
            <input
                type="number"
                placeholder="amount"
                value={utile}
                onChange={(x) => setUtile(x.target.value)}
                className=""
            />
            <select
                value={type}
                onChange={(x) => setType(x.target.value)}
                className=""
            >
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
            </select>
            <input
                type="text"
                placeholder="category"
                value={category}
                onChange={(x) => setCategory(x.target.value)}
                className=""
            />
            <button 
                type="submit"
                className="bg-blue-500"
            >
                Add Transaction
            </button>
        </form>
    );
    
};

export default form;