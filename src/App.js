import './App.css';
import React, {useEffect} from 'react'
import {observer} from "mobx-react-lite";
import todoInstance from './store/Todo'
import todo from "./store/Todo";
import inputInstance from './store/Input'


const App = observer(() => {
    useEffect(() => todo.getTodo(), [])
    return (

        <div>
            {todoInstance.todos.map((element) => <h3 id={element.id}>
                    <h1>{element.todo}</h1>
                    <button onClick={() => todoInstance.removeTodo(element.id)}>Удалить задачу</button>
                    <input type="checkbox" value={element.checkTodo}
                           onClick={() => todo.checkTodo(element)}/>
                </h3>
            )}
            <form onSubmit={event => {
                event.preventDefault();
                if (inputInstance.value !== '') {
                    todo.addTodo(inputInstance.value);
                }
                inputInstance.value = ''
            }}>
                <input
                    value={inputInstance.value}
                    onChange={event => {
                        inputInstance.value = event.target.value
                    }}
                />
            </form>
        </div>

    );
})

export default App;
