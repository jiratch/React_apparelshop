import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Main from './Main';
import Add from './Add';
import {Switch,Route} from 'react-router-dom';
import Addtocart from './Addtocart';



const Router=()=>{
return(
<div>
<Switch>
   < Route component={Home} path="/" exact/>
   < Route component={Login}  path="/login"/>
   < Route component={Signup}  path="/signup"/>
   < Route component={Main}  path="/Main"/>
   < Route component={Add}  path="/Add"/>

</Switch>


</div>)


}

export default Router;