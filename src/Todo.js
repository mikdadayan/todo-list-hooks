import React, {useContext} from 'react';
import {Checkbox, IconButton, ListItemText, ListItem} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemDecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { TodosContext } from './contexts/todo.context';

function Todo({id, task, completed}){
    const {editTodo, toggleTodo, deleteTodo} = useContext(TodosContext)
    const [isEditing, toggle] = useToggleState(false);
    return (
    <ListItem style={{height: '64px'}}>
        {isEditing ? 
            (<EditTodoForm task={task} editTodo={editTodo} id={id} todoToggle={toggle}/>) : 
            (<>
                <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
                <ListItemText style={{textDecoration: completed ? 'line-through': 'none'}}>
                    {task}
                </ListItemText>
                <ListItemDecondaryAction>
                    <IconButton aria-label='Delete' onClick={() => deleteTodo(id) }>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label='Edit' onClick={toggle}>
                        <EditIcon/>
                    </IconButton>
                </ListItemDecondaryAction>
            </>)
        }
    </ListItem>)
}

export default Todo;