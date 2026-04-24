
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const NavbarOut = () =>{


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
                
                <Link to="/app" className="flex justify-center ">
                    <p className="text-5xl font-bold text-center">
                        Finance Dashboard
                    </p>
                
                </Link>

                {/*Desktop*/}
                
                <div className="hidden md:flex items-center gap-6">
                    
                </div>
            </nav>
        </header>
    )
}

export default NavbarOut;