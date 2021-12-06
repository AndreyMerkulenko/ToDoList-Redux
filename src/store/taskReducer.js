


const defaultState = {
    task:[]
}

const ADD_TASK='ADD_TASK' 
const REMOVE_TASK='REMOVE_TASK' 
const EDIT_TASK='EDIT_TASK' 
const TOGGLE_TASK='TOGGLE_TASK' 

export const taskReducer = (state=defaultState, action) => {
    switch (action.type) {

        case ADD_TASK:
            return {...state, task:[...state.task, action.payload]}

        case REMOVE_TASK:
            return {...state, task:state.task.filter(task=>task.id !== action.payload)}

        case TOGGLE_TASK:
            return {...state, task:state.task.map(task=>task.id !== action.payload ? { ...task } :  { ...task, complete: !task.complete } )}

        case EDIT_TASK:
            let result = prompt('Редактировать задачу', action.payload);
            if(result){
                return {...state, task:state.task.map(task=>task.task == action.payload ? { ...task, task: result } : { ...task } )}
            } else return  {...state, task:[...state.task]}

        default:
           return state;
    }
}

export const addTaskAction = (payload) => ({type:'ADD_TASK', payload:payload})
export const removeTaskAction = (payload) => ({type:'REMOVE_TASK', payload:payload})
export const editTaskAction = (payload) => ({type:'EDIT_TASK', payload:payload})
export const toggleTaskAction = (payload) => ({type:'TOGGLE_TASK', payload:payload})