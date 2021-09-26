import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { editTodo } from '../redux/slices/TodoSlice'

const EditTodo = () => {
    const dispatch = useDispatch()

    const params = useParams()
    let Uid = params.id
    const list = useSelector(state => state.todo.todolist)
    let item = list.find((el)=>el.id==Uid)

    const [newDescription, setNewDescription] = useState(item.description)

    const handleEdit=()=> {
        dispatch(editTodo({id:Uid,description:newDescription}))
    }
    return (
        <div>
            <Form>
                <Form.Control type="text" value={item.title} disabled></Form.Control>
                <Form.Control onChange={(e)=>setNewDescription(e.target.value)} type="text" placeholder={item.description}></Form.Control>
                <Button onClick={()=>handleEdit()}>Edit</Button>
            </Form>
        </div>
    )
}

export default EditTodo
