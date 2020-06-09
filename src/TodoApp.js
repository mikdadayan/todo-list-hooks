import React, { useState } from 'react';
import TypogGraphy from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TodoList from "./TodoList";
import Grid from "@material-ui/core/Grid";

function TodoApp(){
    const initialList = [
        {id: 1, task: "Clean FIshtank", completed: false},
        {id: 2, task: "Wash Car", completed: true},
        {id: 3, task: "Grow Beard", completed: false},
    ];
    const [todos, setTodos] = useState(initialList);
     return <Paper 
        style={{
            padding: 0,
            margin: 0 ,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
    >
        <AppBar color='primary' position="static" style={{height: "64px"}}>
            <Toolbar>
                <TypogGraphy color='inherit'>TODO HOOKS</TypogGraphy>
            </Toolbar>
        </AppBar>
        <TodoList todos={todos}/>
    </Paper>
}

export default TodoApp;