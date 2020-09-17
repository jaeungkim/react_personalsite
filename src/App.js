import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Project';
import ContactForm from './components/ContactForm';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Profile />
        <About />
        <Experience />
        <Skills />
        <Project />
        <ContactForm />
        <Footer />
       
      </>
    );
  }
}
export default App;