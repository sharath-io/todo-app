import { useContext } from "react";
import { TodoContext } from ".."

export const Home =() =>{
    const {state} = useContext(TodoContext);

    return (
        <div>
            <h1>this is done home page</h1>

            <ul>
                {
                    state.todoItems.map(({id,title,description,isCompleted}) => <li>
                        <h3>{title }</h3>
                        {/* <p>{description} {isCompleted ? '✅' : <button onClick={()=> handleMark(id)}>Mark as Done</button>}</p> */}
                        </li>)
                }
            </ul>
        </div>
    )
}