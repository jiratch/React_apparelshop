import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Addtocart from './Addtocart';


const e = React.createElement;

class Add extends Component {
    constructor() {
        super();
        this.Add = this.Add.bind(this);
        this.Subtract = this.Subtract.bind(this);
        this.state = {
          Amount: 0
         
        }
      }
   Add(){
   
        this.setState({
          Amount: this.state.Amount+1
        })
      }  
      Subtract(){
      if(this.state.Amount>0){
        this.setState({
          Amount: this.state.Amount-1
        })
      }
      }     
    render () {
    return (
      <div>
      
      <button onClick = {()=>this.Subtract()}>-</button>
     
      <a> </a>{this.state.Amount}<a> </a>
      
      <button onClick = {()=>this.Add()}>+</button> 
      <Addtocart amount={this.state.Amount}/>

     </div>   
        
        
        );
}
}

export default Add;

