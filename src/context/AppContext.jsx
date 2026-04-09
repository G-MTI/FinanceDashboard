
import { createContext, useContext } from "react";
import { setLocalStorage } from "../hooks/setLocalStorage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [transactions, setTransactions] = setLocalStorage("transactions", []);
    const [categories, setCategories] = setLocalStorage("categories", []);
    const [settings, setSettings] = setLocalStorage("settings", [])
    
    const addTransaction = (transaction) => {categories
        setTransactions((prev) => [...prev, transaction]);
    };
    
    const delTransaction = (id) => {
        setTransactions((prev) => 
            prev.filter((x) => x.id !== id)
        ); 
        setCategories((prev) => 
            prev.filter((x) => x.id !== id)
        );
    };

    const addCategory = (categories) => {
        setCategories((prev) => [...prev, categories]);
        console.log(categories);

    };

    const modifySettings = (newSettings) => {
        setSettings((newSettings));
    };

    return (
        <AppContext.Provider
            value={{
                transactions,
                addTransaction,
                delTransaction,

                categories,
                addCategory,

                settings,
                modifySettings,
            }}
        >
           {children}
        </AppContext.Provider>
    );
}


export const useAppContext = () => {
    return useContext(AppContext);
}