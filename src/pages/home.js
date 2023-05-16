import { useContext } from "react";
import { TodoContext } from ".."

export const Home =() =>{
    const {state, dispatch} = useContext(TodoContext);

    return (
        <div>
            <h1>this is done home page</h1>

            <ul>
                {
                    state.todoItems.map(({id,title,description,isCompleted}) => <li>
                        <h3>{title }</h3>
                        <p>{description} {isCompleted ? '✅' : 
                               <button onClick={()=> dispatch({type:'handle_todo', payload: id})}>
                            Mark as Done</button>}</p>
                        </li>)
                }
            </ul>
        </div>
    )
}