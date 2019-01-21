import axios from 'axios'
import ACTION_TYPE from './actionType';

export const getInputChangeAction =(value)=>({    
    type : ACTION_TYPE.CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction =()=>({    
    type : ACTION_TYPE.ADD_TODO_ITEM,
})
export const getDeleteItemAction =(index)=>({    
    type : ACTION_TYPE.DELETE_TODO_ITEM,
    index
})
export const initListAction =(value)=>({    
    type : ACTION_TYPE.INIT_LIST,
    value
})

export const getTodoList =()=>{   
    return (dispatch)=>{        
        axios.get('https://www.easy-mock.com/mock/5c37155bf2375651600a2330/example/api/todolist')
            .then((res)=>{
                console.log(res)
                const data = res.data.data;
                const action = initListAction(data);
                dispatch(action);
                //console.log(action)
                //store.dispatch(action);
            })
            .catch=()=>{
                alert('error')
            }
    }
}
