import React, { useState } from 'react'
import { Container, Form ,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/slices/TodoSlice'

const NewTodo = () => {
    const dispach = useDispatch()
    const [newItem, setNewItem] = useState({id:parseInt(Math.random()),title:'',description:'',isDone:false})
    const handleAdd =()=>{
    dispach(addTodo(newItem))
    }
    return (
        <div>
            <Container>
                <h2 style={{marginTop:'2rem'}}>Add new todo</h2>
            <Form>
                <Form.Label>Todo item</Form.Label>
                <Form.Control type="text" onChange={(e)=>setNewItem({...newItem,title:e.target.value})}/>
                <Form.Label>Todo description</Form.Label>
                <Form.Control type="text" onChange={(e)=>setNewItem({...newItem,description:e.target.value})}/>
            </Form>
            <Button onClick={()=>handleAdd()} variant='outline-success' style={{width:'300px',marginTop:'2rem',marginBottom:'5rem'}}>ADD !</Button>
            </Container>
        </div>
    )
}

export default NewTodo
