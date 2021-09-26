import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTodo, doneTodo } from '../redux/slices/TodoSlice'

const TodoItem = ({item}) => {
    const dispatch = useDispatch()


    const handleDone =()=>{
        dispatch(doneTodo({id:item.id}))
    }

    const handleDelete =()=>{
        dispatch(deleteTodo({id:item.id}))
    }

    return (
        <div>
            <Card>              
                <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <h6 style={{color:item.isDone?"green":"red"}}>{item.isDone?"done":"not done"}</h6>
                </Card.Body>
            </Card>
            <Button onClick={()=>handleDelete()} variant="danger">Delete</Button>
            <Button onClick={()=>handleDone()} variant="success">Toggle Done</Button>
        </div>
    )
}

export default TodoItem
