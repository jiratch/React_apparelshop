
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import Addtocart from './Addtocart'

class Home extends Component {
  
    render() {
    return (
      <div>

          <div className="wrapper">

                <center>
                  <div style={ { backgroundColor:'#E8FFD5',width:'100%',height: '550px' } }>
                    <div id="menu" style={{ float: 'right' }}>

                        <a  style={{ fontFamily: 'Tinos,serif' }}  id="menu">
                        <Link to="/signup"><u>SIGN UP </u></Link>
                        </a>
                        <a style={{ fontFamily: 'Tinos,serif' }}  id="menu">
                        <Link to="/login"><u>LOG IN </u></Link>
                        </a>
                        <a href="payment.html"><img src="images/basket3.png" style={{ width:'40px',height:'40px',marginTop:'25px',marginRight:'10px' }} /></a>

                    </div>
                    <img src="images/header1.png" style={{ float:'center', marginTop:'15px', marginLeft: '20%', width:'500px', height:'500px' }} />
                  </div>
                  <div style={{ marginTop: '20px' }}>
                          
                          <a className="bar" href="1.html">HOME</a>
                          <a className="bar" ><Link to="/Add">ABOUT</Link></a>
                          
                          <div className="dropdown">
                              <a href="#" className="dropbtn">MENU</a>
                              <div className="dropdown-content">
                                  <Link to="/Main"><a>Main Dish</a></Link>
                                  <div className="dropsal">
                                      <a href="#" className="dropbtnsal">Salad</a>
                                      <div className="dropdown-contentsal">
                                          <a href="6.html">Select by Us</a>
                                          <a href="7.html">Select by Yours</a>
                                      </div>
                                  </div>
                                  <a href="3.html">Dessert</a>
                                  
                                  <Link to="/Todo"><u>Drink </u></Link>

                              </div>
                          </div>

                          <a className="bar" href="5.html">CONTACT US</a>
                  </div>
                  <div id="fadein" style={{ width:"80%" }}>
                      <h1 style={{ marginTop: '60px', fontFamily: 'Rajdhani,sans-serif' }}> RECOMMENDED </h1>
                      <a href="2.html"><img className="a" src="images/n1.jpg" style={{ width:'450px',height:'400px' }} /></a>
                      <a href="3.html"><img className="b" src="images/n3.jpg" style={{ width:'450px', height:'400px' }} /></a>
                      <a href="8.html"><img className="c" src="images/n2.jpg" style={{ width:'450px',height:'400px' }} /></a>
                  </div>
                  <div style={{marginTop: '30px' }}>
                      <p className="aa" style={{ marginRight: '220px', fontFamily: 'Dancing Script,cursive' }}> Main dish</p>
                      <p className="aa" style={{ marginRight: '300px', fontFamily: 'Dancing Script,cursive' }}> Dessert</p>
                      <p className="aa" style={{ marginRight: '30px' , fontFamily: 'Dancing Script,cursive' }}> Drink</p>

                  </div>
                  
              </center>
          </div>

          <footer>
              <div></div>
          </footer>
      </div>
    );
  }
}

export default Home;

