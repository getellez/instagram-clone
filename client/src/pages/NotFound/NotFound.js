import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { home } from '../../config/routes'

export default class NotFound extends Component {
  render () {
    return (
      <div>
        <h2> Sorry, this page isn't available. </h2>
        <h2> Sorry, this page isn't available. </h2>
        <h2> Sorry, this page isn't available. </h2>
        <h2> Sorry, this page isn't available. </h2>
        <h2> Sorry, this page isn't available. </h2>
        <p>The link you followed may be broken, or the page may have been removed. <Link to={home}>Go back to Instagram</Link> </p>
      </div>
    )
  }
}
