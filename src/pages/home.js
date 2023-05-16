import { useContext } from "react";
import { TodoContext } from ".."
import  {TodoCard} from '../components/todoCard';
export const Home =() =>{
    const {state} = useContext(TodoContext);

    return (
        <div>
            <h1>this is done home page</h1>
                {
                    state.todoItems.map(item => <TodoCard task={item}/>)
                }
        </div>
    )
}