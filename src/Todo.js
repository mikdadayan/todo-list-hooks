import React from 'react'

import ListItem from "@material-ui/core/ListItem"
import {Checkbox, IconButton, ListItemText} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemDecondaryAction from '@material-ui/core/ListItemSecondaryAction'

function Todo({task, completed}){
    return (
    <ListItem>
        <Checkbox tabIndex={-1} checked={completed}/>
        <ListItemText style={{textDecoration: completed ? 'line-through': 'none'}}>
            {task}
        </ListItemText>
        <ListItemDecondaryAction>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
            <IconButton>
                <EditIcon/>
            </IconButton>
        </ListItemDecondaryAction>
    </ListItem>)
}

export default Todo;