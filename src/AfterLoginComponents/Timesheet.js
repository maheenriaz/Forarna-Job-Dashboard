import React,{useState,Component} from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";
import '../App.css';
import Forarna from '../forarna.jpg';
import browse from '../1.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Timesheet extends Component{
  
  onNavigateHome() {
    this.props.history.push("/CalenderDashboard");
  }
  onNavigateHome2() {
    this.props.history.push("/Timesheet");
  } 
render(){ 
  
return (
      <div className="jumbotron" style={{height:'100%'}}>
     <div className="container-fluid" >
             <br></br><br></br>
              <div className="row">
                   <div className="col-sm-3"  id="dashboard-side" >
                   <br></br>
                      <h2 id="comp_details" className="txt" onClick={this.onNavigateHome.bind(this)}> Calender</h2>
                       <hr></hr>
                         <h2 id="comp_details" className="txt" onClick={this.onNavigateHome2.bind(this)}>Time Sheet</h2>
                          
                         
                        
                    </div>


               

                     <div className="col-sm-9" style={{backgroundColor:'#e9ecef'}} >
                         <div className="row">
                             <div className="col-sm-12"  id="side2">
                                   <center>
                                      <form className="col-md-12" id="dashboard-card" ><br></br><br></br>
                                        <div class="row">
                                                  <div class="col-xs-12">
                                                  <h2 style={{float:'left',fontSize:'44px'}}>Time Sheet</h2> <br></br> <br></br> <br></br><br></br><br></br>
                                                   <div className="container">
                                                          <br/>
                                                          <input type="date" style={{width:'160px',float:'left'}} placeholder="select date"  /> 
                                                          <span className="glyphicon glyphicon-calendar" style={{float:'left'}}></span>
                                                    </div>
                                                    <br></br><br></br><br></br>
                                                    <div class="table-responsive">
                                                      <table summary="This table shows how to create responsive tables using Bootstrap's default functionality" class="table table-bordered table-hover">
                                                        <caption class="text-center">An example of a responsive table based on <a href="https://getbootstrap.com/css/#tables-responsive" target="_blank">Bootstrap</a>:</caption>
                                                        <thead>
                                                          <tr>
                                                            <th>Date</th>
                                                            <th>Day</th>
                                                            <th>Company Name</th>
                                                            <th>Start Date</th>
                                                            <th>Break Time</th>
                                                            <th>End Time</th>
                                                            <th>Sleep In Truck?</th>
                                                            <th>Status</th>
                                                            <th>Email</th>
                                                          </tr>
                                                        </thead>
                                                        <tbody>
                                                          <tr>
                                                            <td>Argentina</td>
                                                            <td>Spanish (official), English, Italian, German, French</td>
                                                            <td>41,803,125</td>
                                                            <td>31.3</td>
                                                            <td>2,780,387</td>
                                                             <td>41,803,125</td>
                                                            <td>31.3</td>
                                                            <td>2,780,387</td>
                                                             <td>41,803,125</td>
                                                           
                                                            

                                                          </tr>
                                                          <tr>
                                                            <td>Argentina</td>
                                                            <td>Spanish (official), English, Italian, German, French</td>
                                                            <td>41,803,125</td>
                                                            <td>31.3</td>
                                                            <td>2,780,387</td>
                                                             <td>41,803,125</td>
                                                            <td>31.3</td>
                                                            <td>2,780,387</td>
                                                             <td>41,803,125</td>
                                                          </tr>
                                                          <tr>
                                                           <td>Argentina</td>
                                                            <td>Spanish (official), English, Italian, German, French</td>
                                                            <td>41,803,125</td>
                                                            <td>31.3</td>
                                                            <td>2,780,387</td>
                                                             <td>41,803,125</td>
                                                            <td>31.3</td>
                                                            <td>2,780,387</td>
                                                             <td>41,803,125</td>
                                                          </tr>
                                                          <tr>
                                                           <td>Argentina</td>
                                                            <td>Spanish (official), English, Italian, German, French</td>
                                                            <td>41,803,125</td>
                                                            <td>31.3</td>
                                                            <td>2,780,387</td>
                                                             <td>41,803,125</td>
                                                            <td>31.3</td>
                                                            <td>2,780,387</td>
                                                             <td>41,803,125</td>
                                                          </tr>
                                                          <tr>
                                                            <td>Argentina</td>
                                                            <td>Spanish (official), English, Italian, German, French</td>
                                                            <td>41,803,125</td>
                                                            <td>31.3</td>
                                                            <td>2,780,387</td>
                                                             <td>41,803,125</td>
                                                            <td>31.3</td>
                                                            <td>2,780,387</td>
                                                             <td>41,803,125</td>
                                                          </tr>
                                                          <tr>
                                                            <td>Argentina</td>
                                                            <td>Spanish (official), English, Italian, German, French</td>
                                                            <td>41,803,125</td>
                                                            <td>31.3</td>
                                                            <td>2,780,387</td>
                                                             <td>41,803,125</td>
                                                            <td>31.3</td>
                                                            <td>2,780,387</td>
                                                             <td>41,803,125</td>
                                                          </tr>
                                                          <tr>
                                                            <td>Argentina</td>
                                                            <td>Spanish (official), English, Italian, German, French</td>
                                                            <td>41,803,125</td>
                                                            <td>31.3</td>
                                                            <td>2,780,387</td>
                                                             <td>41,803,125</td>
                                                            <td>31.3</td>
                                                            <td>2,780,387</td>
                                                             <td>41,803,125</td>
                                                          </tr>
                                                          

                                                        </tbody>
                                                        
                                                      </table>
                                                    </div>
                                                  </div>
                                                </div>
                                                </form>
                                    </center>
                                </div>
                        </div>
                    </div>





              </div>
       </div>



 
  


     







 </div>

    );

}
}




export default Timesheet;
