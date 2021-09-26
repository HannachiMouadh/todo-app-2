import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TodoItem from './TodoItem';

const TodoList = () => {
    const list = useSelector(state => state.todo.todolist)
    const [doneFilter, setDoneFilter] = useState(false)
    const handleDone=()=>{
        setDoneFilter(!doneFilter)
    }
    return (
        <div>
            <Button onClick={()=>handleDone()} variant="success">Toggle</Button>
            {list
            .map(item=>(
                <Link to={`/${item.id}`}>
                <TodoItem item={item}/>
                </Link>
            ))}
        </div>
    )
}

export default TodoList

