import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";
import cartoon from '../cartoon.jpg';
import '../App.css';
import Forarna from '../forarna.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'

class Navbar extends React.Component {
 
render(){ 
    return (
      <div>
     
      <nav id="nav-iop" className="navbar-fixed"  id="nav-border" >
        <div className="container-fluid">
                <div className="nav-wrapper" >
                      <a href="#!" className="brand-logo" style={{color:'black'}}><img src={Forarna} width="170px" height="55px" /></a>   
                      <a className="sidenav-trigger" style={{color:'black'}} data-target="mobile-link"><i href="#" className="material-icons">Menu</i></a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down" style={{marginLeft:'180px'}}>
                           <li><NavLink to="/Dashboard" id="nav-text">
                          <span className="glyphicon glyphicon-time"></span>
                          <b>Dashboard</b></NavLink>
                          </li>
                           <li><NavLink to="/JobsDashboard" id="nav-text"><span className="glyphicon glyphicon-lock"></span><b>Jobs</b></NavLink></li>
                          <li><NavLink to="/CalenderDashboard" id="nav-text"><span className="glyphicon glyphicon-calendar"></span><b>Calender</b></NavLink></li>
                       </ul>
                     <ul className="right hide-on-med-and-down">
                      <div className="col-sm-6"> 
                           <p style={{color:'black'}}><b>Employeer/Post a Job</b></p>
                          </div>
                          <div className="col-sm-3"> 
                            <img src={cartoon} style={{width:'60px',height:'50px',borderRadius:'30px'}} />
                          </div>
                           <div className="col-sm-3">  
                                 <NavLink to="#"><span className="glyphicon glyphicon-chevron-down" style={{fontSize:'20px',color:'black'}}></span></NavLink>
                            
                              </div>
                      
                        </ul>
                  </div>
       </div>
    </nav>
       <ul className="sidenav"  id="mobile-link"  >
            <li><NavLink to="/Dashboard" id="nav-text"><b>Dashboard</b></NavLink></li>
                        <li><NavLink to="/JobsDashboard" id="nav-text"><b>Jobs</b></NavLink></li>
                        <li><NavLink to="/CalenderDashboard" id="nav-text"><b>Calender</b></NavLink></li>
         </ul>


 </div>

    );

}
}





export default Navbar;
