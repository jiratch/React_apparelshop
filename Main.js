import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Add from './Add';
import Addtocart from './Addtocart';
import Addlist from './Addlist';



class Main extends Component {
  
    render() {
    return (  
<div>

<div class="Fix"><Add/>   
</div>

<center>
     <div style={ { backgroundColor:'#E8FFD5',width:'100%',height: '550px' }}>
        <div id="menu" style={{ float: 'right' }}>

                <a href="login.html" id="menu">
                    <u>SIGN UP </u>
                </a>
                <a href="reallogin.html" id="menu">
                    <u>LOG IN</u>
                </a>
                <a href="payment.html"><img src="images/basket3.png" style={{ width:'40px',height:'40px',marginTop:'25px',marginRight:'10px' }} /></a>

        </div>
            <img src="images/header1.png" style={{ float:'center', marginTop:'15px', marginLeft: '20%', width:'500px', height:'500px' }} />
     </div>

      <div style={{marginTop:'20px'}}>
           
            <a class="bar" href="1.html">HOME</a>
            <a class="bar" href="4.html">ABOUT</a>
            <div class="dropdown">
                <a href="#" class="dropbtn">MENU</a>
                <div class="dropdown-content">
                    <a href="2.html">Main Dish</a>
                    <div class="dropsal">
                        <a href="#" class="dropbtnsal">Salad</a>
                        <div class="dropdown-contentsal">
                            <a href="6.html">Select by Us</a>
                            <a href="7.html">Select by Yours</a>
                        </div>
                    </div>
                    <a href="3.html">Dessert</a>
                    <a href="8.html">Drink</a>
                </div>
            </div>

            <a class="bar" href="5.html">CONTACT US</a>
            </div>
    </center>

    <div style={{marginTop: '60px', fontFamily: 'Rajdhani,sans-serif'}}>
        <center>
            <h1 style={{fontFamily: 'Rajdhani,sans-serif'}}> Main Dish</h1>
        </center>
    </div>
    <center>
        <div>
            <div class="imgsameline">
                <img style={{ width:'100%' }} src="images/main1.jpg" />
                <p style={{fontFamily: 'Ropa Sans, sans-serif'}}> Red lentil penne alla puttanesca</p>

                
                
                
            </div>
            <div class="imgsameline">
                <img style={{width:'100%'}} src="images/main2.jpg"/>
                <p style={{fontFamily: 'Ropa Sans, sans-serif'}}> Veggie Salad</p>
                                

            </div>
            <div class="imgsameline">
                <img style={{width:'100%'}} src="images/main3.jpg"/>
                <p style={{fontFamily: 'Ropa Sans, sans-serif'}}> Wildrich Dish</p>
                                

            </div>
        </div>
        <div>
            <div class="imgsameline">
                <img style={{width:'100%'}} src="images/main4.jpg"/>
                <p style={{fontFamily: 'Ropa Sans, sans-serif'}}> Grill Chicken Burrito Salad Bowl</p>
                                

            </div>
            <div class="imgsameline">
                <img style={{width:'100%'}} src="images/main5.jpg"/>
                <p style={{fontFamily: 'Ropa Sans, sans-serif'}}> Temoeh Buddha Bowl</p>
                                

            </div>
            <div class="imgsameline">
                <img style={{width:'100%'}} src="images/main6.jpg"/>
                <p style={{fontFamily: 'Ropa Sans, sans-serif'}}> Ground Chicken Tacos</p>

            </div>
        </div>
        <div>
            <div class="imgsameline">
                <img style={{width:'100%'}} src="images/main7.jpg"/>
                <p style={{fontFamily: 'Ropa Sans, sans-serif'}}> Organic Meat</p>

            </div>
            <div class="imgsameline">
                <img style={{width:'100%'}} src="images/main8.jpg"/>
                <p style={{fontFamily: 'Ropa Sans, sans-serif'}}> Honey Garlic Salmon</p>
                                

            </div>
            <div class="imgsameline">
                <img style={{width:'100%'}} src="images/main9.jpg"/>
                <p style={{fontFamily: 'Ropa Sans, sans-serif'}}> Sweet Potato Broccoli Chicken Bake</p>

            </div>
        </div>
    </center>

</div>
);
}
}

export default Main;