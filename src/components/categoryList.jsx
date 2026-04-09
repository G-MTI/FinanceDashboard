
import { useAppContext } from "../context/AppContext";
import CategoryItem from "./categoryItem";

const categoryList = () => {
    const { categories } = useAppContext();

    return (
        <div className="flex-row justify-center pb-32">
            {categories.length === 0 && (
                <p className="">No categories</p>
            )}

            {categories.map((c) => (
                <CategoryItem key={c.id} category={c} />
            ))}
        </div>
    );
}

export default categoryList;
