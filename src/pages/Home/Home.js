import React, { Component } from 'react'

import './Home.css'
import storiePhoto from './assets/profile_picture_german.png'
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'
export default class Home extends Component {
  
  componentDidMount(){
  }

  handleScrollToLeft(e){
    const storiesContainer = document.querySelector('.Feed__stories')
    e.target.addEventListener('click', () => {
      storiesContainer.scrollLeft += -250
    })
  }
  
  handleScrollToRight(e){
    const storiesContainer = document.querySelector('.Feed__stories')
    e.target.addEventListener('click', () => {
      storiesContainer.scrollLeft += 250
    })

  };
  render() {
    return (
      <>
        <div className="Grid">
          
          <div className='Feed'>
            <div className="Feed__stories">
              <div className='Feed__arrow-container-left'>
                <LeftCircleFilled onClick={this.handleScrollToLeft} className='Feed__arrow' />
              </div>
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
              <div className='Feed__arrow-container-right'>
                <RightCircleFilled onClick={this.handleScrollToRight} className='Feed__arrow' />
              </div>
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
