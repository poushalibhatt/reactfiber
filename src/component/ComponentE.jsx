import React, {Component} from 'react';
import ComponentF from './ComponentF';

class ComponentE extends Component{
    render(){
        return(
            <contextConsumer>
                <ComponentF />
            </contextConsumer>
            
        )
    }
}

export default ComponentE