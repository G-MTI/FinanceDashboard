import { useAppContext } from "../context/AppContext";

const Item = ({ transaction }) => {
  const { delTransaction } = useAppContext();

  return (   
    <div id="item" className="flex">

      <div className="flex">
        <p id="type" className="flex">
          {transaction.type} 
        </p>
        <p id="category" className="flex">
          {transaction.category}
        </p>
      </div>

      <div className="flex">
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
          className="flex bg-red-500"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Item;