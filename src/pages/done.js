import { useContext } from "react";
import { TodoContext } from "..";
import  {TodoCard} from '../components/todoCard';


export const Done =() =>{
    const {state} = useContext(TodoContext);
    const doneTasks = state.todoItems.filter(({isCompleted}) =>isCompleted);
    
    return (
        <div>
            <h1>Tasks Done : {doneTasks.length}</h1>
            {
                    doneTasks.map(item => <TodoCard task={item}/>)
            }
        </div>
    )
}