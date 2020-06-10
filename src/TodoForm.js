import React from "react";
import { Paper, TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

function TodoForm ({addTodo}){
    const [value, updateValue, resetValue] = useInputState('');
    return (
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form onSubmit={ e => {
                e.preventDefault();
                addTodo(value);
                resetValue();
            }}>
                <TextField value={value} onChange={updateValue} margin='normal' label='Add New Todo' fullWidth/>
            </form>
            {value}
            
        </Paper>
    )
}

export default TodoForm;