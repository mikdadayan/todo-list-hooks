import React from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { v4 as uuid4 } from "uuid";
import Todo from './Todo'
function TodoList(props){
    return(
        <Paper>
            <List>
                {props.todos.map(t => (
                    <>
                        <Todo task={t.task} key={uuid4()} completed={t.completed}/>
                        <Divider/>
                    </>
                ))}
            </List>
        </Paper>
         
    )
}

export default TodoList;