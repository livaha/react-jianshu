import React , {Component} from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';

class TodoListUI extends Component {
    render(){
        return (
            <div>
                <div>
                    <Input 
                        value={this.props.inputValue} 
                        style={{width:'300px' ,margin:'10px 10px 0 0'}} 
                        onChange = {this.props.handleInputChange}
                    />
                    <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
                </div>
                <List 
                    style={{marginTop:'10px',width:'300px'}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index)=>(<List.Item onClick={()=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoListUI;
