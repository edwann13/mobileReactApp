import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/CustomNavbar';
import Tabs from './components/TabsCustom'
import BarChart from './components/BarChart'
import ArcGraph from './components/ArcGraph'
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Tabs/>
          
        </div>
      </Router>
    );
  }
}

export default App;
