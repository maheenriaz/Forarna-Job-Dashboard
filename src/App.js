import React from 'react';
import ReactDom from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import LoginNavbar from './AfterLoginComponents/LoginNavbar'
import Dashboard from './AfterLoginComponents/Dashboard'
import JobsDashboard from './AfterLoginComponents/JobsDashboard'
import CalenderDashboard from './AfterLoginComponents/CalenderDashboard'
import JobList1 from './AfterLoginComponents/JobList1'
import JobList2 from './AfterLoginComponents/JobList2'
import Timesheet from './AfterLoginComponents/Timesheet'
import 'react-calendar/dist/Calendar.css';

import {BrowserRouter,Route} from 'react-router-dom'
import history from './AfterLoginComponents/History'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
  <BrowserRouter>
     
		
    <LoginNavbar />
      
           <Route exact path="/Dashboard" component={Dashboard}  />
          <Route exact path="/JobsDashboard" component={JobsDashboard}  />
           <Route  path="/CalenderDashboard" component={CalenderDashboard}  />
           <Route  path="/JobList1" component={JobList1}  />
           <Route  path="/JobList2" component={JobList2}  />
           <Route  path="/Timesheet" component={Timesheet}  />
        
    
      </BrowserRouter>
    </div>
  );
}

export default App;
