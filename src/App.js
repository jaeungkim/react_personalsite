import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import About from './components/About';
class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Profile />
      <About />
      <Footer />
      </>
    );
  }
}
export default App;