import React, {Component} from 'react';

class Welcome extends Component{
    state = {
        message : 'Welcome Guest',
        count: 0
    }
    handleClick = ()=>{
        this.setState ({ 
            message: 'Thanks for subscribing'
        })
    }
    incrementCount =() =>{
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment</button>
                <span>{this.state.message}</span>
                <button onClick={this.handleClick}>Subcribe</button>
            </div>
        )
    }
}

export default Welcome