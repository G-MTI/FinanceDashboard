import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const form = () => {
    const {addTransaction, categories} = useAppContext();

    const [utile, setUtile] = useState("");
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");

    const handleInvio = (x) => {
        x.preventDefault();

        if (!utile || !type || !category) return;

        const newTransaction = {
            id: Date.now(),
            utile: parseFloat(utile),
            type,
            category,
        };

        addTransaction(newTransaction);

        setUtile("");
        setType("");
        setCategory("");
    };

    console.log(categories);

    return (
        <form 
        onSubmit={handleInvio} 
            className=""
        >
            <input
                type="number"
                placeholder="Amount"
                value={utile}
                onChange={(x) => setUtile(x.target.value)}
                className=""
            />
            <select
                value={type}
                onChange={(x) => setType(x.target.value)}
                className=""
            >
                <option value="" disabled>Type</option>
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
            </select>
            <select
                value={category}
                onChange={(c) => setCategory(c.target.value)}
                className=""
            >
                <option value="" disabled>Category</option>

                {(categories || []).map((x, index) => (
                    <option key={index} value={x.categoryName}>
                        {x.categoryName}
                    </option>
                ))}
            </select>

    
            <button 
                type="submit"
                className="bg-blue-500"
            >
                Add transaction
            </button>
        </form>
    );
    
};

export default form;