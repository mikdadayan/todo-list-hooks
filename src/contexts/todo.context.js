import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultProps = [
    {id: 1, task: 'Mow the lawn using goats', completed: 'false'},
    {id: 2, task: 'Release lady bugs into garden', completed: 'false'}
];

export const TodosContext = createContext();

export function TodosProvider(props) {
    const todoStuff = useTodoState(defaultProps);
    return (
        <TodosContext.Provider value={todoStuff}>
            {props.children}
        </TodosContext.Provider>
    )
}