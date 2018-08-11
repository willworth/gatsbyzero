import React, { Component } from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby'


// import About from 'about';
export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <Layout />
        <p>Testing</p>
        <h3>You have reached the coding blog Worth Coding.  Welcome! </h3>
    <p>My name's Will. I'm a junior javascript and python programmer.  This site is 
      a record of my progress as I develop my coding skills. I hope it will be of use to you. </p>
    
    <p> Please check out <Link to="/blog/">the blog</Link>, or click
     <Link to = "/about/"> here</Link> to learn more about me or get in touch.</p>
     


        
      </div>
    )
  }
}

