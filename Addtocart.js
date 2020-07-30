import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddInput from './AddInput'; 
import Additem from './Additem'; 
import Addlist from './Addlist'


class Addtocart extends Component{
constructor(props){
super(props)
this.state={
 todoItems:[]
}
this.addTodo = this.addTodo.bind(this)
this.Clear = this.Clear.bind(this)
}

addTodo(newTodo){
this.setState({todoItems:this.state.todoItems.concat([newTodo])})


}

Clear(){
this.setState({todoItems:[]})

}

render(){
    
return(
<div>
<AddInput onAddTodo={this.addTodo} />
<button onClick={this.Clear}>Clear</button>
<Addlist items={this.state.todoItems}/>




</div>
);

}


}
export default Addtocart;



