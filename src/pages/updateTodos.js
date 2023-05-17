import {useContext, useState} from 'react';
import { TodoContext } from "..";


export const UpdateTodos = () =>{
    const { state, dispatch} = useContext(TodoContext)
    const [newTask, setNewTask] = useState(
        {id:0, title:'', description:'', isCompleted: null}
     );

    return (
        <div>
            <h1>Update todos page</h1>

            <h3>Add a task</h3>
           <div>
           <label>
                Add title :
                 <input type="text" onChange={(e)=> setNewTask({...newTask, title:e.target.value})}/>
            </label>
            </div> 
            <label>
                <div>
                Add description :
                 <input type="text" onChange={(e)=> setNewTask({...newTask, description:e.target.value })}/>
                </div>
            </label>
            <button onClick={()=> dispatch({type: 'ADD_TASK', payload: {...newTask, id: state.todoItems.length+1, isCompleted: false}})}>Add Task</button>
        </div>
    )
}