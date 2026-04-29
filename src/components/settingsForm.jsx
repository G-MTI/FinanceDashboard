import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const settingsForm = () => {
    const {currency, setCurrency} = useAppContext();
    const [valuta, setValuta] = useState ("");

    const handleInvio = (x) => {
        x.preventDefault(); 

        const isValid =["€", "$", "£", "¥", "₹", "₽", "₿"];

        if (!isValid.includes(valuta)) {
            alert("Choose between valid currency €, £, $, ₹, ¥, ₿, ₽");
            return
        }

        setCurrency(valuta);
        setValuta("")
    };


    return (<section id="categoryForm" className="pt-32 pb-8">
        <h1 className="font-bold text-3xl flex justify-center mb-8">Settings</h1>
        <form 
        onSubmit={handleInvio} 
        className="flex flex-col gap-8"
        > 
            <div className="flex flex-row items-center gap-4 border-1 border-gray-300 rounded-3xl">
                <div className=" flex gap-2 px-4 border-r-1 border-gray-300 py-4 ">
                    <p>
                        Current currency:
                    </p>
                    <p>
                        {currency}
                    </p>  
                </div>
                
                <input
                    type="text"
                    placeholder="Choose a new currency"
                    value={valuta}
                    onChange={(x) => setValuta(x.target.value)}
                    className="mr-4"
                />
            </div>
            <button 
                type="submit"
                className="bg-[var(--button)] hover:bg-[var(--hover)] cursor-pointer p-4 rounded-3xl text-white font-bold"
            >
                Save settings
            </button>
        </form>
    </section>
    );
    
};

export default settingsForm;