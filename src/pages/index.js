import React, { Component } from 'react';
import Header from '../components/header';

import { Link } from 'gatsby'


// import About from 'about';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>Testing</p>
        
        <Link to="/about/">Go to about</Link>


        
      </div>
    )
  }
}

