import axios from 'axios';
import { url } from '../../../api/index';


export const getTodo = (todo) => {
    return (dispatch,getState) => {
        axios
        .post(`${url}/todos`)
        .then(todos => {
            dispatch({
                type:"GET_TODO",
                todos
            })
        }).catch( error => {
            console.log(error.response);
        })
    }
}

export const addTodo = (todo) => {
    return (dispatch,getState) => {
        axios
        .post(`${url}/todos`,todo)
        .then(todo => {
            dispatch({
                type:"ADD_TODO",
                todo
            })
        }).catch( error => {
            console.log(error.response);
        })
    }
}
