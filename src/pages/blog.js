import React, { Component } from 'react'
import Header from '../components/header';
import { Link } from 'gatsby'

export default class Blog extends Component {
  render() {
    return (
      <div>
          <Header />
        <h1>Blog</h1>
                    
              <p>  <a href="https://www.linkedin.com/in/willworth">Linkedin</a></p>
              <p>  <a href="https://twitter.com/worthcoding">Twitter</a></p>
              <p>  <a href="https://fb.com/willworth">Facebook</a></p>
              <p><a href="https://github.com/willworth/">My Github</a></p>
              <p>  Or email me willworthcoding  at  gmail dot com </p>

              
                <p>Thanks for your interest.</p>
                <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}
