import ACTION_TYPE from './actionType';
const defaultState = {
    inputValue:'abc',
    list:[1,2],
}

export default (state = defaultState,action)=>{
    //state为之前的数据，action为得到当前收到的动作
    //console.log(state,action)
    if(action.type === ACTION_TYPE.CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ACTION_TYPE.ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type === ACTION_TYPE.DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)
        return newState;
    }
    if(action.type === ACTION_TYPE.INIT_LIST){
        console.log(action)
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value;
        return newState;
    }
    return state;
}