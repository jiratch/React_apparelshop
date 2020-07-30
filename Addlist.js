import React, { Component } from 'react';
import Additem from './Additem'
class Addlist extends Component{
    
render(){
    let {items}=this.props
return(
<div>
<ul>
    {items.map(todo=><li><Additem text ={todo}/></li>)}

</ul>

</div>

)

}

}
export default Addlist;