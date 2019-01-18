import React, { Component,Fragment} from 'react'
class Todo extends Component{
	constructor(props){
        super(props);
        this.state = {
            inputValue:"hello!!!",
            list:[]
        }
	}
    render(){
        return(
        	<Fragment>
        		<div>
        			<input value={this.state.inputValue}
                    onChange={this.hadleInputChange.bind(this)}/>
              <button>提交</button>
        		</div>
            <ul>
              <li>学英语</li>
              <li>学英语</li>
            </ul>
        	</Fragment>
        )
    }
    hadleInputChange(e){
        console.log(e.target)
        this.setState({
            inputValue:e.target.value
        })
    }
}

export default Todo;