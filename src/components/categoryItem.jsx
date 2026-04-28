import { useAppContext } from "../context/AppContext";

const categoryItem = ({ category }) => {
  const { delCategory } = useAppContext();
  const {categories} = useAppContext();

  return (   
    <div id="item" className="flex justify-center mb-2 gap-4">
 
      <div className="flex gap-4">
        <p id="type" className="flex">
          {category.categoryName} 
        </p>
        <span className="w-5 h-5 rounded-full"style={{ backgroundColor: category.categoryColor }} ></span>
      </div>
 
      <div className="flex">
        <button
          onClick={() => delCategory(category.id)}
          className="flex text-red-500 font-bold rounded-3xl cursor-pointer"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default categoryItem;