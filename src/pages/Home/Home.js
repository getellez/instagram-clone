import React, { Component } from 'react'

import './Home.css'
import storiePhoto from './assets/profile_picture_german.png'

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="Grid">
          
          <div className='Feed'>
            <div className="Feed__stories">
              <ul>
                <li>
                  <figure>
                    <img src={storiePhoto} alt="User" />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={storiePhoto} alt="User" />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={storiePhoto} alt="User" />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={storiePhoto} alt="User" />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={storiePhoto} alt="User" />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={storiePhoto} alt="User" />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={storiePhoto} alt="User" />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={storiePhoto} alt="User" />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src={storiePhoto} alt="User" />
                  </figure>
                </li>
              </ul>

            </div>

            <div className="Feed__posts">
              <div className="Post">
                <div className="Post__header"></div>
                <div className="Post__image"></div>
                <div className="Post__controls"></div>
                <div className="Post__comments"></div>
              </div>
            </div>
          </div>

          <div>
            <h1>Home4</h1>
            <h1>Home5</h1>
          </div>

        </div>
      </>
    )
  }
}
