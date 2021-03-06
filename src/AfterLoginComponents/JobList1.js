import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";

import '../App.css';
import Forarna from '../forarna.jpg';
import browse from '../1.jpg';

import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'

class JobsDashboard extends React.Component {
   constructor(){
    super()
    this.state={
      show1:false
    }
  }
  new(){
    this.setState({show1: !this.state.show1})
  }
  onNavigateHome() {
    this.props.history.push("/JobsDashboard");
  }
  onNavigateHome2() {
    this.props.history.push("/JobList1");
  } 
  onNavigateHome3() {
    this.props.history.push("/JobList2");
  }
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
                   <div className="col-sm-3"  id="der" >
                   <br></br>
                   <h2 id="comp_details" className="txt" onClick={this.onNavigateHome.bind(this)}>Current Job</h2>
                      <hr></hr>
                         <h2 id="comp_details" className="txt" onClick={this.onNavigateHome2.bind(this)}>Applied Job</h2>
                          <hr></hr>
                         <h2 id="comp_details" className="txt" onClick={this.onNavigateHome3.bind(this)}>Rejected Jobs</h2>
                           <hr></hr>
                      
                     <NavLink to="#" style={{textDecoration:'none',color:'black'}} > <h2 id="comp_details" onClick={()=>{this.new()}}>Jobs Offered</h2></NavLink>
                     </div>
  



                <div className="col-sm-9" style={{backgroundColor:'#e9ecef'}} >
         

   <div className="row">
               <div className="col-sm-12"  id="side2">
                             <center>
                                 <form className="col-md-12" id="new_dashboard_card" ><br></br><br></br>
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
                                                               <p><span class="glyphicon glyphicon-envelope" ></span>Chat</p>
                                                              </div>
                                                              <div class="col-sm-6" >
                                                              <img src={browse} style={{width:'90px',height:'70px',borderRadius:'10px',marginTop:'10px'}} />
                                                                 <p>Permenant</p>
                                                                 <p>City Name</p>
                                                                  <p><span class="glyphicon glyphicon-calendar" ></span>Start Date</p>
                                                                   <p><span class="glyphicon glyphicon-calendar" ></span>End Date</p>
                                                                   <p style={{color:'#17a2b8'}}>Applied</p>
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
                                                               <p><span class="glyphicon glyphicon-envelope" ></span>Chat</p>
                                                              </div>
                                                              <div class="col-sm-6" >
                                                              <img src={browse} style={{width:'90px',height:'70px',borderRadius:'10px',marginTop:'10px'}} />
                                                                 <p>Permenant</p>
                                                                 <p>City Name</p>
                                                                  <p><span class="glyphicon glyphicon-calendar" ></span>Start Date</p>
                                                                   <p><span class="glyphicon glyphicon-calendar" ></span>End Date</p>
                                                                     <p style={{color:'#17a2b8'}}>Applied</p>
                                                              </div>
                                                            </div>  
                                                         
                                                      </div>
                                                    </div>


                                         </form>
                      </center>
                  </div>
</div>
           




 <Modal show={this.state.show1} onHide={()=>this.new()} className="my-modal"  >
          
          <Modal.Body style={{height:'600px',marginTop:'-20px'}}>
          <center>
            <br></br><br></br>  <br></br><br></br>  <br></br><br></br>
          <p style={{fontSize:'26px', color:'black ',marginTop:'-50px'}}>Band Account Detail</p>
            <br></br><br></br>
                   <section>
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                             
                                      <div className="row align-items-center">
                                              <div className="col">
                                                <input type="text" className="form-control" placeholder="Personal Number" />
                                              </div>
                                      </div>
                                      <div className="row align-items-center mt-4">
                                         <div className="col">
                                                <input type="Number" className="form-control" placeholder="Bank Number"/>
                                              </div>
                                      </div>
                                       <div className="row align-items-center mt-4">
                                         <div className="col">
                                                <input type="Number" className="form-control" placeholder="Bank Name"/>
                                              </div>
                                       </div>
                                        <div className="row align-items-center mt-4">
                                         <div className="col">
                                            <label style={{float:'left'}}>
                                                                <input type="checkbox" />
                                                                <span>I Agree</span>
                                             </label>
                                         </div>
                                            </div>

                             <p style={{fontSize:'19px', color:'black '}}>Consultant Detail</p>
                                <div className="row align-items-center mt-4">
                                  <div className="col">
                                    <input type="password" className="form-control" placeholder="Taxation Number"/>
                                  </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                  <div className="col">
                                    <input type="password" className="form-control" placeholder="Organization Number"/>
                                  </div>
                                </div>
                                  <div class="col-sm-4"><button type="button" class="btn btn-info" id="share_fb">Continue</button></div>
                                 <br></br><br></br><br></br>
                            </div>
                          </div>   
                        </div>
                      </section>

                 
          </center>
          </Modal.Body>
            </Modal>




              </div>







</div>
</div>

</div>
  






      









    );

}
}





export default JobsDashboard;
