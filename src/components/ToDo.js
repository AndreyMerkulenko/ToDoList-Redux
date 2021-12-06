import React from 'react'
import { useDispatch } from 'react-redux';
import { editTaskAction, removeTaskAction, toggleTaskAction } from '../store/taskReducer';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
function ToDo({task}) {
    const dispatch = useDispatch();


    const toggleTask = (id) => {
        dispatch(toggleTaskAction(id))
    }

    const removeTask = (id) => {
        dispatch(removeTaskAction(id))
    }
    const editTask = (task) => {
        dispatch(editTaskAction(task))
    }

    return (
        <div>
            <div key={task.id} className="item-todo">
                <div
                    className={task.complete ? 'item-text strike' : 'item-text'}
                    onClick={() => toggleTask(task.id)}>
                    {task.task}
                </div>
                    <div className="item-delete" onClick={() => removeTask(task.id)}>
                    <DeleteOutlined />
                    </div>
                        <div className="item-edit" onClick={() => editTask(task.task)}>
                        <EditOutlined />
                        </div>
            </div>
        </div>
    )
}

export default ToDo
