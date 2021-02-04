import {makeAutoObservable} from "mobx";
import inputInstance from './Input.js';
import {testFetch} from "../networking";

const urlAdd = 'https://lod-backend-spring.herokuapp.com/api/v1/user/add'
const urlGet = 'https://lod-backend-spring.herokuapp.com/api/v1/user/all'
const urlDelete = 'https://lod-backend-spring.herokuapp.com/api/v1/user/delete/'
const urlPatch = 'https://lod-backend-spring.herokuapp.com/api/v1/user/change/'

class Todo {

    todos = []

    constructor() {
        makeAutoObservable(this)
    }

    getTodo() {
        fetch(urlGet).then((data) => data.json()).then(response => this.todos = response)
    }

    addTodo(task) {
        testFetch(urlAdd, 'POST', {
            todo: task,
            date: new Date().toLocaleTimeString(),
            checkTodo: false
        }).then(() => this.getTodo())
    }

    removeTodo(id) {
        testFetch(urlDelete + id, 'DELETE').then(() => this.getTodo())
    }

    checkTodo(element) {
        testFetch(urlPatch + element.id, 'PATCH', {
            id: element.id,
            todo: element.todo,
            date: element.date,
            checkTodo: !element.checkTodo
        }).then()
    }
}

export default new Todo()