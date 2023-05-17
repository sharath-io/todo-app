import {createContext, useReducer} from 'react';
import {TodoListItems} from '../data/todoListItems';


export const TodoContext = createContext();

const reducerFunction = (state,action) =>{
    switch(action.type){
        case 'handle_todo': return  {
            todoItems:  state.todoItems.map(task => task.id === Number(action.payload)
              ? {...task, isCompleted: !task.isCompleted} : task)
        }
        case 'ADD_TASK' : return {
            todoItems : [...state.todoItems, action.payload]
        }
        case 'REMOVE_TASK' : return {
            todoItems : state.todoItems.filter(task => task.id !==action.payload)
        }
        default : return state;
    }
}



export const TodoProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducerFunction, {todoItems: TodoListItems})

    return <TodoContext.Provider value={{state,dispatch}}>
        {children}
    </TodoContext.Provider>

}