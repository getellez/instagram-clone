import React, { Component } from 'react'
import Navbar from '../Navbar'

export default class CustomLayout extends Component {
  
  render() {
    return (
      <>
        <Navbar />
        { this.props.children }
      </>
    )
  }
}
