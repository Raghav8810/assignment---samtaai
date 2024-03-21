import { createContext, useState } from "react";

export const BookContext = createContext(null);

export const BookProvider = (props) =>{
    const[items,setItem] = useState([]);
    
    return(
        <BookContext.Provider value={{items,setItem}} >
          {props.children}
        </BookContext.Provider>
    );
};