import React from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {v1 as uuidv4} from "uuid";
import Todo from './Todo'
function TodoList(props){
    console.log(uuidv4())
    return(
        <Paper>
            <List>
                {props.todos.map(t => (
                    <Todo id={t.id} task={t.task} key={uuidv4()} completed={t.completed} deleteTodo={props.deleteTodo} toggleTodo={props.toggleTodo}/>
                ))}
            </List>
        </Paper>
         
    )
}

export default TodoList;