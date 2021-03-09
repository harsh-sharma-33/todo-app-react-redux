import { React, useState } from 'react'
import './css/todo.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../state/actions'

const Todo = () => {
    const todos = useSelector((state) => state)
    const dispatch = useDispatch()
    const [txt, setTXT] = useState('')

    const list = document.getElementById('list')

    // const autoScroll = () => {
    //     list.scrollTop = list.scrollHeight
    // }

    const handleSubmit = () => {
        if (txt !== '') dispatch(add(txt))
        setTXT('')
        // autoScroll()
    }

    return (
        <div className='todo-wrap'>
            <h1 className='todo'>Todo</h1>

            <ul className='list' id='list'>
                {todos.map((todo, index) => {
                    return (
                        <li className='item' key={todo.id}>
                            <p className='task'>{todo.todo}</p>
                            <AiOutlineCloseCircle
                                value={todo.id}
                                className='del-btn'
                                onClick={() => {
                                    dispatch(remove(todo.id))
                                }}
                            />
                        </li>
                    )
                })}
            </ul>

            <div className='input-wrap'>
                <input
                    type='text'
                    value={txt}
                    onChange={(e) => {
                        setTXT(e.target.value)
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                />
                <button onClick={handleSubmit}>Add</button>
            </div>
        </div>
    )
}

export default Todo
