import React , {Component} from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from './store'

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
                    <Button type="primary">提交</Button>
                </div>
                <List 
                    style={{marginTop:'10px',width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item=>(<List.Item>{item}</List.Item>)}
                />
            </div>

        )
    }
    handleInputChange=(e)=>{
        //console.log(e.target.value)
        const action = {
            type:'change_input_value',
            value:e.target.value
        }
        store.dispatch(action);
    }
    handleStoreChange=()=>{
        this.setState(store.getState())
    }
}

export default TodoList;