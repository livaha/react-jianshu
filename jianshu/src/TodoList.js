import React , {Component} from 'react';
import TodoListUI from './TodoListUI';
import store from './store';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/action';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render(){
        return (
        <TodoListUI
            inputValue = {this.state.inputValue}
            list = {this.state.list}
            handleInputChange = {this.handleInputChange}
            handleBtnClick = {this.handleBtnClick}
            handleItemDelete = {this.handleItemDelete}
        />)
    }
    handleInputChange=(e)=>{
        //console.log(e.target.value)
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }
    handleStoreChange=()=>{
        this.setState(store.getState())
    }
    handleBtnClick=()=>{
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index){        
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;