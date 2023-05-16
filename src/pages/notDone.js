import { useContext } from "react";
import { TodoContext } from "..";

export const NotDone =() =>{
    const {todoItems} = useContext(TodoContext);
    const NotDoneTasks = todoItems.filter(({isCompleted})=> !isCompleted);

    return (
        <div>
            <h1>this is Not done todos page</h1>
            <ul>
                {
                    NotDoneTasks.map(({title,description,isCompleted}) => <li>
                        <h3>{title }</h3>
                        <p>{description}</p>
                        </li>)
                }
            </ul>
        </div>
    )
}