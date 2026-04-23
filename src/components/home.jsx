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
        <div className="min-h-screen flex flex-col justify-center items-center gap-4">
            <Link to="/app">
                <button className="bg-[var(--button)] hover:bg-[var(--hover)] cursor-pointer p-4 rounded-3xl text-white font-bold" onClick={() => setMode ("guest")}>
                    continue as a guest
                </button>
            </Link>
            <div className="flex gap-4">
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
    )

};
export default Home;