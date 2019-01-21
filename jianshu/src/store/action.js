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
