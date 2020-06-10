import React from "react";
import { Paper, TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

function TodoForm ({addTodo}){
    const [value, updateValue, resetValue] = useInputState('');
    return (
        <Paper>
            <form onSubmit={ e => {
                e.preventDefault();
                addTodo(value);
                resetValue();
            }}>
                <TextField value={value} onChange={updateValue}/>
            </form>
            {value}
            
        </Paper>
    )
}

export default TodoForm;