import React, { Component } from 'react';
import Addtocart from './Addtocart';
import Additem from './Additem';
import './App.css';
import Add from './Add';

class AddInput extends Component{
constructor(props){
super(props)
this.state = { newTodo:""}
this.addClicked = this.addClicked.bind(this)

}

addClicked(){

    
    this.props.onAddTodo(this.state.newTodo)
    this.setState({newTodo:""})
}
render(){
return(
<div>
    <input onChange={(e)=>this.setState({newTodo:e.target.value})}/>
    <button onClick={this.addClicked}>ADD</button>


    
</div>

)

}


}
export default AddInput;