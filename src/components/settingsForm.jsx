import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const categoryForm = () => {
    const {addCategory} = useAppContext();

    const [categoryName, setCategoryName] = useState("");
    const [categoryColor, setCategoryColor] = useState("");

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

    return (
        <form 
        onSubmit={handleInvio} 
            className=""
        >   
            <h1>Category list</h1>
            <input
                type="text"
                placeholder="Category name"
                value={categoryName}
                onChange={(x) => setCategoryName(x.target.value)}
            />
            <input
                type="color"
                value={categoryColor}
                onChange={(x) => setCategoryColor(x.target.value)}
                className=""
            />
    
            <button 
                type="submit"
                className="bg-blue-500"
            >
                Add category
            </button>
        </form>
    );
    
};

export default categoryForm;