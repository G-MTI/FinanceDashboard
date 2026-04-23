
import { createContext, useContext, useState} from "react";
import {setLocalStorage } from "../hooks/setLocalStorage";
import { jwtDecode } from "jwt-decode";
import { loginUser } from "../utili/api";
import { getTransactions } from "../utili/api";
import { useEffect } from "react";

const login = async () => {
  const data = await loginUser(email, password);

  localStorage.setItem("token", data.token);

  const decoded = jwtDecode(data.token);

  setUserId(decoded.userId); 
  setIsAuthenticated(true);
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [categories, setCategories] = setLocalStorage("categories", [{ id: 1775810355090, categoryName: "Food", categoryColor: "#ff7800" },{ id: 1775810370839, categoryName: "Payment", categoryColor: "#2ec27e" }]);
    {/*const [settings, setSettings] = setLocalStorage("settings", [])*/}

    const [transactions, setTransactions] = setLocalStorage("guest_transactions", []);
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

    const [mode, setMode] = useState("guest");

    const [userId, setUserId] = useState(
  localStorage.getItem("token") ? null : "guest"
);
        
const login = async (email, password) => {
  const data = await loginUser(email, password);

  const decoded = jwtDecode(data.token);

  setUserId(decoded.userId);
  setIsAuthenticated(true);

  const userTx = await getTransactions();
  setTransactions(userTx);
};


const logout = () => {
  localStorage.removeItem("token");
  setIsAuthenticated(false);
  setUserId("guest"); 
  setTransactions([]);
};

const addTransaction = async (transaction) => {
  if (userId === "guest") {
    const updated = [
      {
        ...transaction,
        userId: "guest",
        id: crypto.randomUUID(),
        createdAt: Date.now()
      },
      ...transactions
    ];

    setTransactions(updated);
    return;
  }

  const res = await fetch(`${import.meta.env.VITE_API_URL}/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(transaction),
  });

  const saved = await res.json();
  setTransactions(prev => [saved, ...prev]);
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

    {/*const modifySettings = (newSettings) => {
        setSettings((newSettings));
    };*/}

    const delAllTransactions = () => {
        const confirm = window.confirm("Are you sure you want to delete all items? - You cannot undo this action!");
        if (confirm){
            setTransactions([]);
        }
    }
useEffect(() => {
  const token = localStorage.getItem("token");

  if (token) {
    const decoded = jwtDecode(token);
    setUserId(decoded.userId);
    setIsAuthenticated(true);
  } else {
    setUserId("guest");
  }
}, []);

    return (
        <AppContext.Provider
            value={{
                transactions,
                addTransaction,
                delTransaction,
                delAllTransactions,

                categories,
                addCategory,

                mode,
                setMode,

                isAuthenticated,

                login,

                logout,
            }}
        >
           {children}
        </AppContext.Provider>
    );

};

export const useAppContext = () => {
    return useContext(AppContext);
}
