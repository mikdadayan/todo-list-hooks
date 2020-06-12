import React, {useEffect } from 'react';
import useTodoState from './hooks/useTodoState';
import TypogGraphy from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp(){
    const initialList = [];
    const {todos, addTodo, toggleTodo, deleteTodo, editTodo} = useTodoState(initialList);


     return <Paper 
        style={{
            padding: 0,
            margin: 0 ,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
    >
        <AppBar color='secondary' position="static" style={{height: "64px"}}>
            <Toolbar>
                <TypogGraphy color='inherit'>TODO HOOKS</TypogGraphy>
            </Toolbar>
        </AppBar>
        <Grid container justify='center' style={{marginTop: '1rem'}}>
            <Grid item xs={11} md={8} lg={4}>
                <TodoForm addTodo={addTodo}/>
                <TodoList toggleTodo={toggleTodo} deleteTodo={deleteTodo} todos={todos} editTodo={editTodo}/>
            </Grid>
        </Grid>
    </Paper>
}

export default TodoApp;