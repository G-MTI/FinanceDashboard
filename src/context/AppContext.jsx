
import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions((prev) => [...prev, transaction]);
    };

    const delTransaction = (id) => {
        setTransactions((prev) => 
            prev.filter((x) => x.id !== id)
        );
    };

    return (
        <AppContext.Provider
            value={{
                transactions,
                addTransaction,
                delTransaction,
            }}
        >
           {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    return useContext(AppContext);
}