import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../store/taskReducer';

function ToDoForm() {
    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
      };
    
      const addTask = (task) => {
          const newTask={
              id: Math.random().toString(36).substr(2, 9),
              task: task,
            complete: false,
          }
          dispatch(addTaskAction(newTask))
      }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput) 
        setUserInput('');
      }; 

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleSubmit(e);
        }
      };


    return (
<form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Введите значение..."
      />
      <button>Сохранить</button>
    </form>
    )
}

export default ToDoForm
