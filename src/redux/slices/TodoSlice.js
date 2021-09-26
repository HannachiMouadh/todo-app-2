import { createSlice } from '@reduxjs/toolkit'


const initialState = {    
        todolist: [
            {id:1,title:'todo item 1',description:'todo description 1',isDone:false},
            {id:2,title:'todo item 2',description:'todo description 2',isDone:false},
            {id:3,title:'todo item 3',description:'todo description 3',isDone:true},
            {id:4,title:'todo item 4',description:'todo description 4',isDone:true},
        ]  
    };  
    export const todoSlice = createSlice({  
        name: 'todolist',  
        initialState, 
            reducers: {    
                addTodo:(state,action) => {
                    state.todolist.push(action.payload)
                },
                deleteTodo:(state,action) => {
                    state.todolist=state.todolist.filter(el=>el.id!==action.payload.id)
                },
                doneTodo:(state,action) => {
                    let i = state.todolist.findIndex(el=>el.id==action.payload.id)
                    state.todolist[i].isDone={...state.todolist[i],isDone:!state.todolist[i].isDone}
                },
                editTodo:(state,action) => {
                    let i = state.todolist.findIndex(el=>el.id==action.payload.id)
                    state.todolist[i]={...state.todolist[i],description:action.payload.description}
                }
             },
            })
                export const { addTodo,deleteTodo,doneTodo,editTodo } = todoSlice.actions
                export default todoSlice.reducer
