import { useContext } from "react";
import { TodoContext } from "..";

export const Done =() =>{
    const {todoItems} = useContext(TodoContext);
    const doneTasks = todoItems.filter(({isCompleted}) =>isCompleted);
    
    return (
        <div>
            <h1>this is done todos page</h1>
            <ul>
                {
                    doneTasks.map(({title,description,isCompleted}) => <li>
                        <h3>{title }</h3>
                        <p>{description}</p>
                        </li>)
                }
            </ul>


        </div>
    )
}