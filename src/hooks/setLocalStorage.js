
import { useState, useEffect } from "react";

export const setLocalStorage = (key, value0) => {

  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : value0;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));  {/* local storege salva i dati in formato stringa, per questo è necessario convertire l'oggetto in stringa*/}

    {/*localStorage.removeItem('transaction');  elimina l'elemento di local storage in base alla key, in questo caso 'transaction'. per refresch pagina*/ }
  
    }, [key, value]);

  return [value, setValue];
};