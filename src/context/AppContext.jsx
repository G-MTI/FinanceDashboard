
import { createContext, useContext, useState} from "react";
import {setLocalStorage } from "../hooks/setLocalStorage";
import { jwtDecode } from "jwt-decode";
import { loginUser } from "../utili/api";
import { getTransactions } from "../utili/api";
import { getCategories } from "../utili/api";
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
  const [categories, setCategories] = setLocalStorage("guest_categories", []);
  const [currency, setCurrency] = setLocalStorage("currency", "€");
  const [transactions, setTransactions] = setLocalStorage("guest_transactions", []);

  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [mode, setMode] = useState("guest");
  const [userId, setUserId] = useState(localStorage.getItem("token") ? null : "guest");
        
  const login = async (email, password) => {
   const data = await loginUser(email, password);
    
   const decoded = jwtDecode(data.token);
    
   setUserId(decoded.userId);
   setIsAuthenticated(true);
    
   const userTx = await getTransactions();
   setTransactions(userTx);
    
   const userCategories = await getCategories();
   setCategories(userCategories);
    
  };


const logout = () => {
  localStorage.removeItem("token");
  setIsAuthenticated(false);
  setUserId("guest"); 
  setTransactions([]);
  setCategories([{ id: 1775810355090, categoryName: "Food", categoryColor: "#ff7800" },{ id: 1775810370839, categoryName: "Payment", categoryColor: "#2ec27e" }]);
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


const addCategory = async (category) => {
  if (userId === "guest") {
    const updated = [
      {
        ...category,
        userId: "guest",
        id: crypto.randomUUID(),
        createdAt: Date.now()
      },
      ...categories
    ];

    setCategories(updated);
    return;
  }

  const res = await fetch(`${import.meta.env.VITE_API_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(category),
  });

  const saved = await res.json();
  setCategories(prev => [saved, ...prev]);
};

const delCategory = async (id) => {
  const confirm = window.confirm("Are you sure you want to delete this item?");
  if (!confirm) return;

  if (userId === "guest") {
    setCategories(prev => prev.filter(x => x.id !== id));
    return;
  }

  await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  setCategories(prev => prev.filter(x => x.id !== id));
};

const delTransaction = async (id) => {
  const confirm = window.confirm("Are you sure you want to delete this item?");
  if (!confirm) return;

  if (userId === "guest") {
    setTransactions(prev => prev.filter(x => x.id !== id));
    return;
  }

  await fetch(`${import.meta.env.VITE_API_URL}/transactions/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  setTransactions(prev => prev.filter(x => x.id !== id));
};

    {/*const modifySettings = (newSettings) => {
        setSettings((newSettings));
    };*/}


const delAllTransactions = async () => {
  const confirm = window.confirm("Are you sure you want to delete all items? - You cannot undo this action!");
  if (!confirm) return;

  if (userId === "guest") {
    setTransactions([]);
    return;
  }

  await fetch(`${import.meta.env.VITE_API_URL}/transactions`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  setTransactions([]);
};

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
                delCategory,

                mode,
                setMode,

                isAuthenticated,

                login,

                logout,

                currency,
                setCurrency,
            }}
        >
           {children}
        </AppContext.Provider>
    );

};

export const useAppContext = () => {
    return useContext(AppContext);
}
