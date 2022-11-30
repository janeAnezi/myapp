import React from 'react';
import { Component } from 'react';
import './App.css';
import Navbar from "../src/components/Navbar";
import Section from "../src/components/section";
import Reviews from "../src/components/Reviews";
// import Footer from "../src/components/Footer";



class App extends Component{
  render(){
    return (
      <div>
        <Navbar />
        <Section />
        <Reviews />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
