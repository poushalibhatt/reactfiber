import React, {Component} from 'react';

class Counter extends Component{

    constructor(){
        super()
        this.state={
            count: 0
        }
    }
    handleClick =()=>{
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    render(){
        return(
            <div>
            {this.props.render(this.state.count, this.handleClick)}
        </div>
        )
        
    }
}

export default Counter