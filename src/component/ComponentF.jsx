import React, {Component} from 'react';
import userConsumer from './User';

class ComponentF extends Component{
    render(){
        return(
            <userConsumer>
                {
                    (username) => {
                    return <h1>Hi I am {username}</h1>
                    }
                }
            </userConsumer>
        )
    }
}

export default ComponentF