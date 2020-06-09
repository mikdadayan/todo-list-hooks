import React from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
function TodoList(props){
    return(
        <Paper>
            <List>
                {props.todos.map(t => (
                    <>
                        <ListItem>
                            <ListItemText>{t.task}</ListItemText>
                        </ListItem>
                        <Divider/>
                    </>
                ))}
            </List>
        </Paper>
         
    )
}

export default TodoList;