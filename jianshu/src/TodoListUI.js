import React  from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';

const TodoListUI=(props)=> {
        return (
            <div>
                <div>
                    <Input 
                        value={props.inputValue} 
                        style={{width:'300px' ,margin:'10px 10px 0 0'}} 
                        onChange = {props.handleInputChange}
                    />
                    <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
                </div>
                <List 
                    style={{marginTop:'10px',width:'300px'}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index)=>(<List.Item onClick={()=>{props.handleItemDelete(index)}}>{item}</List.Item>)}
                />
            </div>
        )
}

export default TodoListUI;

