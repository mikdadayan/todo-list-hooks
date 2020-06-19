import React, {useContext} from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { v1 as uuidv4 } from "uuid";
import Todo from './Todo';
import {TodosContext} from './contexts/todo.context';

function TodoList(props) {
    const {todos} = useContext(TodosContext)
    if (todos.length) {
        return (
            <Paper>
                <List>
                    {todos.map(t => (
                        <Todo
                            {...t}
                            key={uuidv4()}
                        />
                    ))}
                </List>
            </Paper>

        )
    }
    return null
}

export default TodoList;