import React, {Component} from 'react';

class Refs extends Component{
    constructor(){
        super()
        this.inputRef= React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    handleClick =()=>{
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
                <input type='text' ref={this.inputRef}/>
                <button onClick={this.handleClick}>Click</button>
            </div>

        )
        
    }
}

export default Refs