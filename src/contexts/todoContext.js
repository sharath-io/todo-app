import {createContext, useState} from 'react';
import {TodoListItems} from '../data/todoListItems';


export const TodoContext = createContext();

export const TodoProvider = ({children}) =>{

    const [todoItems, setTodoItems] = useState(TodoListItems);

    const handleMark = (id) =>{
        setTodoItems(todoItems.map(task => task.id === Number(id) ? {...task, isCompleted: !task.isCompleted} : task))
    }


    return <TodoContext.Provider value={{todoItems, handleMark}}>
        {children}
    </TodoContext.Provider>

}