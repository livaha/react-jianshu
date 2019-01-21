import React , {Component} from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from './store';
import ACTION_TYPE from './store/actionType';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState()
        store.subscribe(this.handleStoreChange);
    }
    render(){
        return (
            <div>
                <div>
                    <Input 
                        value={this.state.inputValue} 
                        style={{width:'300px' ,margin:'10px 10px 0 0'}} 
                        onChange = {this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                </div>
                <List 
                    style={{marginTop:'10px',width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index)=>(<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
                />
            </div>

        )
    }
    handleInputChange=(e)=>{
        //console.log(e.target.value)
        const action = {
            type:ACTION_TYPE.CHANGE_INPUT_VALUE,
            value:e.target.value
        }
        store.dispatch(action);
    }
    handleStoreChange=()=>{
        this.setState(store.getState())
    }
    handleBtnClick=()=>{
        const action = {
            type:ACTION_TYPE.ADD_TODO_ITEM,
        }
        store.dispatch(action);
    }
    handleItemDelete=(index)=>{        
        const action = {
            type:ACTION_TYPE.DELETE_TODO_ITEM,
            index
        }
        store.dispatch(action);
    }
}

export default TodoList;