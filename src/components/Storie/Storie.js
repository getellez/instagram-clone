import React, { Component } from 'react'

import './Storie.css'

export default class Storie extends Component {
  render() {
    return (
      <li className="Feed__stories-item">
        <figure className="Feed__stories-figure">
          <img src={this.props.imgSrc} className="Feed__stories-img" alt={this.props.alt} />
        </figure>
      </li>
    )
  }
}
