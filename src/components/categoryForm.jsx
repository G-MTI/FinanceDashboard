import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const categoryForm = () => {
    const {addCategory} = useAppContext();

    const [categoryName, setCategoryName] = useState("");
    const [categoryColor, setCategoryColor] = useState("#2563eb");

    const handleInvio = (x) => {
        x.preventDefault();  

        if (!categoryName || !categoryColor) return;

        const newCategory = {
            id: Date.now(),
            categoryName,
            categoryColor,
        };

        addCategory(newCategory);

    
        setCategoryName("");
        setCategoryColor("");
    };

    return (<section id="categoryForm" className="pt-32 pb-8">
        <h1 className="font-bold text-3xl flex justify-center mb-8">Category list</h1>
        <form 
        onSubmit={handleInvio} 
        className="flex flex-wrap justify-center items-center gap-8"
        >   
            <input
                type="text"
                placeholder="Category name"
                value={categoryName}
                onChange={(x) => setCategoryName(x.target.value)}
                className="border-1 border-gray-300 p-4 rounded-3xl"
            />
            <div className="flex flex-row items-center gap-4 border-1 p-4 border-gray-300 rounded-3xl">
                <p>Select a color</p>
                <input
                    type="color"
                    value={categoryColor}
                    onChange={(x) => setCategoryColor(x.target.value)}
                    className="border-1 border-gray-300 rounded-3xl"
                />
            </div>
    
            <button  
                type="submit" 
                className="bg-[var(--button)] hover:bg-[var(--hover)] cursor-pointer p-4 rounded-3xl text-white font-bold"
            >
                Add category
            </button>
        </form>
    </section>
    );
    
};

export default categoryForm;