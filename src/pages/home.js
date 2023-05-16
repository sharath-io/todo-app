import { useContext } from "react";
import { TodoContext } from ".."

export const Home =() =>{
    const {todoItems, handleMark} = useContext(TodoContext);

    console.log('in home', todoItems);
    return (
        <div>
            <h1>this is done home page</h1>

            <ul>
                {
                    todoItems.map(({id,title,description,isCompleted}) => <li>
                        <h3>{title }</h3>
                        <p>{description} {!isCompleted && <button onClick={()=> handleMark(id)}>Mark as Done</button>}</p>
                        </li>)
                }
            </ul>
        </div>
    )
}