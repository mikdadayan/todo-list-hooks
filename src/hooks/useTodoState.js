import {v4 as uuidv4} from "uuid";
import useLocalStorageState from './useLocalStorageState';

export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState('todos', initialTodos);
    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}])
        },
        deleteTodo: todoId => {
            const newTodos = todos.filter(todo => {
                return todo.id !== todoId
            })
            setTodos(newTodos);
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(t => {
                return t.id === todoId ? {...t,completed: !t.completed} : t
            })
        
            setTodos(updatedTodos);
        },
        editTodo: (todoId, task) => {
            const updatedTodos = todos.map(t => {
                return t.id === todoId ? {...t,task: task} : t
            });
            setTodos(updatedTodos)
        }
    }
}

