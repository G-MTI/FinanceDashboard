
import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";



const Navbar = () =>{

    const navigate = useNavigate();
const { logout } = useAppContext();

const handleLogout = () => {
  logout();
  navigate("/");
};

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <header className={` fixed top-0 left-0 right-0 py-6 ${isScrolled ? "glass-transparent" : "bg-transparent"} z-50`}>
            <nav className="max-w-screen container flex items-center left-0 px-12 right-0 top-0 justify-between mx-auto">
                {/*schiaccio cambia tema sito?*/}
                <a href="#" className="text-5xl font-bold text-center">
                    Finance Dashboard
                </a>
                <button onClick={handleLogout}>
                    Exit
                </button>
                
            </nav>
        </header>
    )
}

export default Navbar;