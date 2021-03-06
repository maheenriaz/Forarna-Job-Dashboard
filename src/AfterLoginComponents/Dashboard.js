import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";

import '../App.css';
import Forarna from '../forarna.jpg';
import browse from '../1.jpg';

import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'

class Dashboard extends React.Component {
 
render(){ 
    return (
      <div className="jumbotron" style={{height:'100%'}}>
     <div className="row" style={{backgroundColor:'white'}} >
    <div className="col-sm-12" >
    <div className="container">
     <div class="row">
      <center>
      <div class="col-sm-4" >
           <form action="">
            <input type="text" className="form-control" placeholder="Search.." name="search" id="search_dashboard"/>
            <i className="fa fa-search"></i>
          </form>
      </div>

        <div class="col-sm-4" >
           <form action="">
            <input type="text" className="form-control" placeholder="Location.." name="search" id="location_dashboard"/>
            <i className="fa fa-search"></i>
          </form>
        </div>
        <div class="col-sm-4" >
              <button type="button" class="btn btn-info" id="dashboard_button">Search</button>
        </div>
      </center>
      </div>
    </div>
    </div>
      </div>
     





     <div className="container-fluid" >
             <br></br><br></br>
              <div className="row">
                   <div className="col-sm-3"  id="dashboard-side" >
                   <br></br>
                      <h2 id="comp_details" className="txt">Sorted By</h2>
                      <h3 style={{textAlign:'center'}} className="txt">Relevance|Date</h3>
                      <hr></hr>
                         <h2 id="comp_details" className="txt">Job Type</h2>
                          <h3 style={{textAlign:'center'}} className="txt">Project</h3>
                           <h3 style={{textAlign:'center'}} className="txt">Permenant</h3>
                            <h3 style={{textAlign:'center'}} className="txt">Seasonal</h3>
                             <h3 style={{textAlign:'center'}} className="txt">Extra</h3>
                          <hr></hr>
                        
                    </div>
  



                <div className="col-sm-9" style={{backgroundColor:'#e9ecef'}} >
           <div className="row">
               <div className="col-sm-12"  id="side2">
                             <center>
                                 <form className="col-md-12" id="dashboard-card" ><br></br><br></br>
                                   <h4 style={{float:'left'}}>1 of 256 jobs</h4>
                                   <br></br><br></br>
                                    <h2 style={{float:'left',fontSize:'44px'}}>Job List</h2> <br></br> <br></br> <br></br><br></br><br></br>
                                       <div className="col s2 m6" id="new-card-dashboard">
                                              <div className="card " style={{backgroundColor:'white'}}>
                                                <div class="row">
                                                  <div class="col-sm-6" >

                                                     <p>Job Title</p>
                                                       <p>Company Name   4.8<span class="glyphicon glyphicon-star" ></span></p>
                                                          <p>Address</p>
                                                            <br></br>
                                                             <p>-First line of detail</p>
                                                              <p>-Second line of detail</p>
                                                               <br></br>
                                                               <p><span class="glyphicon glyphicon-user" ></span>15 people have applied</p>
                                                              </div>
                                                              <div class="col-sm-6" >
                                                              <img src={browse} style={{width:'90px',height:'70px',borderRadius:'10px',marginTop:'10px'}} />
                                                                 <p>Permenant</p>
                                                                 <p>City Name</p>
                                                                  <p><span class="glyphicon glyphicon-calendar" ></span>Start Date</p>
                                                                   <p><span class="glyphicon glyphicon-calendar" ></span>End Date</p>
                                                                   <button type="button" id="dashboard-apply" class="btn btn-primary">Apply</button>
                                                              </div>
                                                            </div>  
                                                         
                                                      </div>
                                                    </div>



                                             <div className="col s2 m6"  id="dashboard-acrd-second">
                                              <div className="card " style={{backgroundColor:'white'}}>
                                                <div class="row">
                                                  <div class="col-sm-6" >

                                                     <p>Job Title</p>
                                                       <p>Company Name   4.8<span class="glyphicon glyphicon-star" ></span></p>
                                                          <p>Address</p>
                                                            <br></br>
                                                             <p>-First line of detail</p>
                                                              <p>-Second line of detail</p>
                                                               <br></br>
                                                               <p><span class="glyphicon glyphicon-user" ></span>15 people have applied</p>
                                                              </div>
                                                              <div class="col-sm-6" >
                                                              <img src={browse} style={{width:'90px',height:'70px',borderRadius:'10px',marginTop:'10px'}} />
                                                                 <p>Permenant</p>
                                                                 <p>City Name</p>
                                                                  <p><span class="glyphicon glyphicon-calendar" ></span>Start Date</p>
                                                                   <p><span class="glyphicon glyphicon-calendar" ></span>End Date</p>
                                                                   <button type="button" id="dashboard-apply" class="btn btn-primary">Apply</button>
                                                              </div>
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





export default Dashboard;
