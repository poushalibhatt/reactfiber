import React, {Component} from 'react';

class HoverCounter extends Component{

    render(){
        const {count, handleClick} = this.props
        return(
            <div>
                <h1 onMouseOver={handleClick}>Hover {count} times</h1>
            </div>
        )
    }
}

export default HoverCounter