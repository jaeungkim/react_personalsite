import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
// import ContactForm from './components/ContactForm';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Profile />
        <About />
        <Experience />
        <Project />
        {/* <ContactForm /> */}
        <Contact />
        <Footer />
       
      </>
    );
  }
}
export default App;