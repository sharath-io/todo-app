import { useContext } from "react";
import { TodoContext } from "..";

export const NotDone =() =>{
    const {state} = useContext(TodoContext);
    const NotDoneTasks = state.todoItems.filter(({isCompleted})=> !isCompleted);

    return (
        <div>
            <h1>this is Not done todos page</h1>
            <ul>
                {
                    NotDoneTasks.map(({title,description}) => <li>
                        <h3>{title }</h3>
                        <p>{description}</p>
                        </li>)
                }
            </ul>
        </div>
    )
}