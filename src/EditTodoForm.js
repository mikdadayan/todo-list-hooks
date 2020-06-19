import React, {useContext} from "react";
import useInputState from './hooks/useInputState';
import { TextField } from '@material-ui/core';
import { TodosContext } from "./contexts/todo.context";

function EditTodoForm({id, task, todoToggle }) {
    const  {editTodo} = useContext(TodosContext)
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form onSubmit={(e) => { 
            e.preventDefault();
            editTodo(id, value) ;
            todoToggle();
            reset()
        }}
        style={{marginLeft:'1rem', width: '70%'}}
        >
            <TextField 
                margin='normal' 
                value={value} 
                onChange={handleChange} 
                fullWidth
                autoFocus
            />
        </form>
       
    )
}

export default EditTodoForm;