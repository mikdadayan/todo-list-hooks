import React from 'react'

import ListItem from "@material-ui/core/ListItem"
import {Checkbox, IconButton, ListItemText} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemDecondaryAction from '@material-ui/core/ListItemSecondaryAction'

function Todo({id, task, completed, deleteTodo, toggleTodo}){
    return (
    <ListItem>
        <Checkbox tabIndex={-1} checked={completed} onClick={()=>toggleTodo(id)}/>
        <ListItemText style={{textDecoration: completed ? 'line-through': 'none'}}>
            {task}
        </ListItemText>
        <ListItemDecondaryAction>
            <IconButton aria-label='Delete' onClick={() => deleteTodo(id) }>
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label='Edit'>
                <EditIcon/>
            </IconButton>
        </ListItemDecondaryAction>
    </ListItem>)
}

export default Todo;