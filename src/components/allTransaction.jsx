
import { useAppContext } from "../context/AppContext";
import Item from "./item";
import { useState } from "react";


const AllTransaction = () => {
    const { delAllTransactions} = useAppContext();
    const { transactions } = useAppContext();
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("recent")

    let sortedTransactions = [];
    if (transactions) {
        sortedTransactions = [...transactions];
    } else {
        sortedTransactions = [];
    }

    sortedTransactions.sort((x, y) => {
        if (sort === "recent"){
            return y.id - x.id;
        } else {
            return x.id - y.id;
        }
    });

    const filteredTransactions = (sortedTransactions || []).filter((x) =>
        x.category.toLowerCase().includes(search.toLowerCase()) ||
        x.type.toLowerCase().includes(search.toLowerCase())||
        new Date(x.id).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }).toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className=" flex flex-col justify-center">
            <div className="flex flex-wrap justify-center gap-8">
                <input
                    type="text"
                    placeholder = "Search by category or by type"
                    value={search}
                    onChange={(s) => setSearch(s.target.value)}
                    className="flex border-1 border-gray-300 p-4 rounded-3xl "
                />
                <div>
                    <select
                        value={sort}
                        onChange={(x) => setSort(sort === "recent" ? "oldest" : "recent")}
                        className="border-1 border-gray-300 p-4.5 rounded-3xl"
                    >
                        <option value="recent">Newest first</option>
                        <option value="oldest">Oldest first</option>
                    </select>
                </div>
            
            
                {transactions.length !== 0 && (
                    <div className="flex justify-center">
                        <button onClick={delAllTransactions} className=" bg-[var(--light-red)] hover:bg-[var(--red)] text-white font-bold rounded-3xl p-4">
                            Clear transactions
                        </button>
                    </div>
                    
                )}
            </div>
            
            {filteredTransactions.length === 0 && (
                <p className="flex justify-center mt-8">No transactions</p>
            )}
            <div className="mt-8">
                {filteredTransactions.map((t) => (
                    <Item key={t.id} transaction={t} />
                ))}
            </div>
            
        </div>
    );
}

export default AllTransaction;