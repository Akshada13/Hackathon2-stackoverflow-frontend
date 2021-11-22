import React from "react";
import './App.css';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Content from './Content';
import Sidebar from './sidebar';
import Question from './Question';
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div class="wrapper">
          <div class="row">
            <div class="col-lg-2">
              <div class="sidebar-wrapper">
                <Sidebar />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="content-wrapper">
                <Routes>
                  <Route path="/" component={Content} exact="true" />
                  <Route path="/Questions" component={Question} exact="true" />
                </Routes>
              </div>
            </div>
            <div class="col-lg-4">
              <h4>
                Tags:
              </h4>
            </div>
          </div>
        </div>

      </Router>
    </>
  );
}

export default App;