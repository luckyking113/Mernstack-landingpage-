import React, { Component } from 'react';
import Navbar from './navbar';
import Header from './header';
import Works from './works';
import Order from './order';
import About from './about';
import Faq from './faq';
import Footer from './footer.js';

class App extends Component {
  render() {
    return (
      <div id="home">
        <Navbar />
        <Header />
        <Works />
        <Order />
        <About />        
        <Faq />
        <Footer />
      </div>
    );
  }
}

export default App;
