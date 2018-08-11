import React, { Component } from 'react'
import Header from '../components/header';
export default class Layout extends Component {
  render() {
    return (
      

 <div
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Header/>
      </div>
    )
  }
}
