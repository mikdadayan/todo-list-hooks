import React from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { v1 as uuidv4 } from "uuid";
import Todo from './Todo'
function TodoList(props) {
    if (props.todos.length) {
        return (
            <Paper>
                <List>
                    {props.todos.map(t => (
                        <Todo
                            {...t}
                            key={uuidv4()}
                            deleteTodo={props.deleteTodo}
                            toggleTodo={props.toggleTodo}
                            editTodo={props.editTodo} 
                        />
                    ))}
                </List>
            </Paper>

        )
    }
    return null
}

export default TodoList;