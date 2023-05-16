import { useContext } from "react";
import { TodoContext } from "..";
import  {TodoCard} from '../components/todoCard';

export const NotDone =() =>{
    const {state} = useContext(TodoContext);
    const NotDoneTasks = state.todoItems.filter(({isCompleted})=> !isCompleted);

    return (
        <div>
            <h1>this is Not done todos page</h1>
            {
                    NotDoneTasks.map(item => <TodoCard task={item}/>)
            }
        </div>
    )
}