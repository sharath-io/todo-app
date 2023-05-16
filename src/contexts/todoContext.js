import {createContext, useReducer} from 'react';
import {TodoListItems} from '../data/todoListItems';


export const TodoContext = createContext();

export const TodoProvider = ({children}) =>{

    const [state, dispatch] = useReducer(()=>{}, {todoItems: TodoListItems})

    // const handleMark = (id) =>{
    //     setTodoItems(todoItems.map(task => task.id === Number(id) ? {...task, isCompleted: !task.isCompleted} : task))
    // }

    return <TodoContext.Provider value={{state,dispatch}}>
        {children}
    </TodoContext.Provider>

}