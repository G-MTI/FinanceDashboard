import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const {mode, setMode} = useAppContext();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) setMode("user");
    }, []);

    if (mode) {
    console.log(mode)
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <p className="max-w-150 text-center">
                Finance Dashboard is a web app for quickly and easily tracking your income and expenses.
                You can manage your transactions, organize them by category, and view your data at any time.
                Log in to permanently save your data, or try guest mode to get started right away without registering.</p>
            <div className="flex gap-16 mt-8" >
                <Link to="/app">
                    <button className="bg-[var(--button)] hover:bg-[var(--hover)] cursor-pointer p-4 rounded-3xl text-white font-bold" onClick={() => setMode ("guest")}>
                        continue as a guest
                    </button>
                </Link>
                <div className="flex gap-8">
                    <Link to="/login">
                        <button className="bg-[var(--button)] hover:bg-[var(--hover)] cursor-pointer p-4 rounded-3xl text-white font-bold" onClick={() => setMode ("user")}>
                            login
                        </button>
                    </Link>

                    <Link to="/register">
                        <button className="bg-[var(--button)] hover:bg-[var(--hover)] cursor-pointer p-4 rounded-3xl text-white font-bold" onClick={() => setMode ("user")}>
                            register
                        </button>
                    </Link>
                </div>
            </div>
            
        </div>
    )

};
export default Home;