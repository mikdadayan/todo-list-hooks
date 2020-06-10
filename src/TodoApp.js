import React, { useState } from 'react';
import TypogGraphy from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import {v4 as uuidv4} from "uuid";

function TodoApp(){
    const initialList = [
        {id: uuidv4(), task: "Clean FIshtank", completed: false},
        {id: uuidv4(), task: "Wash Car", completed: true},
        {id: uuidv4(), task: "Grow Beard", completed: false},
    ];
    
    const [todos, setTodos] = useState(initialList);
    console.log(todos);
    const addTodo = newTodoText => {
        setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}])
    }
    const deleteTodo = todoId => {
        const newTodos = todos.filter(todo => {
            return todo.id !== todoId
        })
        setTodos(newTodos);
    }
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(t => {
            return t.id === todoId ? {...t,completed: !t.completed} : t
        })

        setTodos(updatedTodos);
    }
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
                <TodoList toggleTodo={toggleTodo} deleteTodo={deleteTodo} todos={todos}/>
            </Grid>
        </Grid>
    </Paper>
}

export default TodoApp;