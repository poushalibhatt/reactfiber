import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

let UpdatedComponent =(OriginalComponent) =>{
  class NewComponent extends React.Component{
    state= {
        count:0
    }
    handleIncrement = () =>{
        this.setState(prevState => (
            {
                count: prevState.count+1
            })
        )
    }
      render(){
          return <OriginalComponent count={this.state.count} increment={this.handleIncrement} incrtementCount={incrtementCount}/>
      }
  }
  return NewComponent
}

export default UpdatedComponent