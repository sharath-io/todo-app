import { useContext } from "react";
import { TodoContext } from "../contexts/todoContext";

export const TodoCard =({task}) =>{
    const {dispatch} = useContext(TodoContext);

    const {id, title, description, isCompleted} = task;
    return (
        <div>
             <h3>{title } {isCompleted ? '✅' : '🔲'} </h3>
             <p>{description}  
             <button onClick={()=> dispatch({type:'handle_todo', payload: id})}>
             {!isCompleted ? "Mark as Done" : "Mark as Un done" }</button></p>
        </div>
           
    )
}







