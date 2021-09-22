import React, { Component } from 'react'

import './StoriesContainer.css'
import storiePhoto from './assets/profile_picture_german.png'
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'
import Storie from '../Storie'


export default class StoriesContainer extends Component {
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
      <div className="Feed__stories">
              <div className='Feed__arrow-container-left'>
                <LeftCircleFilled onClick={this.handleScrollToLeft} className='Feed__arrow' />
              </div>
              <ul>
                <Storie imgSrc={storiePhoto} alt="User" />
                <Storie imgSrc={storiePhoto} alt="User" />
                <Storie imgSrc={storiePhoto} alt="User" />
                <Storie imgSrc={storiePhoto} alt="User" />
                <Storie imgSrc={storiePhoto} alt="User" />
                <Storie imgSrc={storiePhoto} alt="User" />
                <Storie imgSrc={storiePhoto} alt="User" />
                <Storie imgSrc={storiePhoto} alt="User" />
                <Storie imgSrc={storiePhoto} alt="User" />
                <Storie imgSrc={storiePhoto} alt="User" />
                <Storie imgSrc={storiePhoto} alt="User" />
                <Storie imgSrc={storiePhoto} alt="User" />
                <Storie imgSrc={storiePhoto} alt="User" />
                <Storie imgSrc={storiePhoto} alt="User" />
                <Storie imgSrc={storiePhoto} alt="User" />
              </ul>
              <div className='Feed__arrow-container-right'>
                <RightCircleFilled onClick={this.handleScrollToRight} className='Feed__arrow' />
              </div>
            </div>
    )
  }
}
