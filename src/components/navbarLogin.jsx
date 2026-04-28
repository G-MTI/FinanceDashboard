
import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";



const Navbar = () =>{
    const navigate = useNavigate();
    const { logout } = useAppContext();

    const handleLogout = () => {
      logout();
      navigate("/");
    };

    const [isOpen, setIsOpen] = useState(false);
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

                <a href="#" className="hidden md:flex text-5xl font-bold">
                    Finance Dashboard
                </a>
                {/*Desktop*/}
                <div className="hidden md:flex items-center justify-center">
                    <div className="flex gap-8 ">
                        <button onClick={handleLogout} className="hover:scale-120 hover:font-bold duration-300 cursor-pointer ">
                            Exit
                        </button>
                        <button onClick={() => navigate("/settings")} className=" hover:scale-120 hover:font-bold duration-300 cursor-pointer">
                            Settings
                        </button>
                    </div>
                </div>

                {/*Mobile*/}
                <a href="#" className=" md:hidden text-2xl font-bold">
                    Finance Dashboard
                </a>
                <button className="md:hidden text-white" onClick={() => setIsOpen((prev) => !prev)}>
                    {isOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
                {/*Mobile*/}
                {isOpen && (
                    <div className="md:hidden glass absolute top-full left-6 right-6 rounded-lg">
                        <div className="container text-background flex flex-col items-center gap-4 p-4 mx-auto">
                            <button onClick={handleLogout} className="hover:scale-120 duration-300 cursor-pointer ">
                                Exit
                            </button>
                            <button onClick={() => navigate("/settings")} className=" hover:scale-120 duration-300 cursor-pointer">
                                Setting
                            </button>
                        </div>
                    </div>
                )}
                
                
            </nav>
        </header>
        )
}

export default Navbar;