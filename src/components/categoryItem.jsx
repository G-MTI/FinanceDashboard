import { useAppContext } from "../context/AppContext";

const categoryItem = ({ category }) => {
  const { delTransaction } = useAppContext();

  return (   
    <div id="item" className="flex">
 
      <div className="flex">
        <p id="type" className="flex">
          {category.categoryName} 
        </p>
        <p id="category" className="flex">
          {category.categoryColor}
        </p>
      </div>

      <div className="flex">
        <button
          onClick={() => delTransaction(category.id)}
          className="flex bg-red-500"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default categoryItem;