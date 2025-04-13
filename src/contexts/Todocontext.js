import { createContext,useContext } from "react";

export const TodeContext =createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false,
        },
    ],
    addTodo:(todo) =>{},
    updateTodo:() =>{id,todo},
    deleteTodo:(id) =>{},
    toggleComplete:(id) =>{}
     
    
})

 
export const useTodo =() =>{
    return useContext(TodeContext)
}
export const TodoProvider =TodeContext.Provider