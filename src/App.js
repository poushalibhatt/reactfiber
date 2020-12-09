import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import List from './component/List';
import Refs from './component/Refs';
// import UpdatedComponent from './component/Hoc';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import Counter from './component/Counter';
import ComponentC from './component/ComponentC';
import userProvider from './component/User';

function App() {

  
  return (
    <div>
      {/* <Welcome />
      <List /> */}
      {/* <Parent /> */}
      {/* <Refs /> */}
      <Counter render={(count, handleClick)=> (<ClickCounter count={count} handleClick={handleClick}/>)}/>
      <Counter render={(count, handleClick)=> (<HoverCounter count={count} handleClick={handleClick}/>)}/>
      {/* <UpdatedComponent incrtementCount={incrtementCount}> */}
      <userProvider name='Poushali'>
      <ComponentC />
      </userProvider>
      
    </div>
    
  );
}

export default App;
