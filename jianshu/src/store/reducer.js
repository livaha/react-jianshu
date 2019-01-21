const defaultState = {
    inputValue:'abc',
    list:[1,2],
}

export default (state = defaultState,action)=>{
    //state为之前的数据，action为得到当前收到的动作
    //console.log(state,action)
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'add_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type === 'delete_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)
        return newState;
    }
    return state;
}