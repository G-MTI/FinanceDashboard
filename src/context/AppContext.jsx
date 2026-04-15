
import { createContext, useContext } from "react";
import { setLocalStorage } from "../hooks/setLocalStorage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [transactions, setTransactions] = setLocalStorage("transactions", []);
    const [categories, setCategories] = setLocalStorage("categories", [{ id: 1775810355090, categoryName: "Food", categoryColor: "#ff7800" },{ id: 1775810370839, categoryName: "Payment", categoryColor: "#2ec27e" }]);
    const [settings, setSettings] = setLocalStorage("settings", [])
    
    const addTransaction = (transaction) => {categories
        setTransactions((prev) => [transaction, ...prev]);
    };
    
    const delTransaction = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this item?");

        if (confirm) {
              setTransactions((prev) => 
                  prev.filter((x) => x.id !== id)
              ); 
              setCategories((prev) => 
                  prev.filter((x) => x.id !== id)
              );
          }
    };

    const addCategory = (categories) => {
        setCategories((prev) => [...prev, categories]);
        console.log(categories);

    };

    const modifySettings = (newSettings) => {
        setSettings((newSettings));
    };

    const delAllTransactions = () => {
        const confirm = window.confirm("Are you sure you want to delete all items? - You cannot undo this action!");
        if (confirm){
            setTransactions([]);
        }
    }

    return (
        <AppContext.Provider
            value={{
                transactions,
                addTransaction,
                delTransaction,
                delAllTransactions,

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