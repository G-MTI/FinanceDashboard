import { useAppContext } from "../context/AppContext";

const Item = ({ transaction }) => {
  const { delTransaction } = useAppContext();

  return (   
    <div id="item" className="flex justify-center mb-2 gap-4">

      <div className="flex gap-4">
        
        <p id="category" className="flex">
          {transaction.category}
        </p>
        <p id="type" className="flex">
          {transaction.type} 
        </p>
      </div>

      <div className="flex gap-4">
        <p
          className={
            transaction.type === "Expense"
              ? "text-red-500"
              : "text-green-500"
          }
        >
            {/*poi mettere il € come variabile, l'utent sceglie la moneta*/}
          {transaction.utile}€ 
        </p>

        <button
          onClick={() => delTransaction(transaction.id)}
          className="flex text-red-500 font-bold rounded-3xl"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Item;