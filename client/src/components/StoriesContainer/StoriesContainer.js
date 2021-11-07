import React, { Component } from 'react'

import './StoriesContainer.css'
import storiePhoto from './assets/profile_picture_german.png'
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'
import Storie from '../Storie'

export default class StoriesContainer extends Component {
  componentDidMount () {

  }

  handleScrollContainer (e) {
    if (e.target.scrollLeft < 250) {
      const arrowLeft = document.querySelector('.Feed__arrow-container-left')
      arrowLeft.style.display = 'none'
    } else {
      const arrowLeft = document.querySelector('.Feed__arrow-container-left')
      arrowLeft.style.display = 'flex'
    }
  }

  handleScrollToLeft (e) {
    const storiesContainer = document.querySelector('.Feed__stories')
    e.target.addEventListener('click', () => {
      storiesContainer.scrollLeft += -250
    })
  }

  handleScrollToRight (e) {
    const storiesContainer = document.querySelector('.Feed__stories')
    e.target.addEventListener('click', () => {
      storiesContainer.scrollLeft += 250
    })
  };

  render () {
    return (
      <div className='Feed__stories' onScroll={this.handleScrollContainer} onLoad={this.handleScrollContainer}>
        <div className='Feed__arrow-container-left'>
          <LeftCircleFilled onClick={this.handleScrollToLeft} color='white' className='Feed__arrow' />
        </div>
        <ul>
          <Storie imgSrc={storiePhoto} alt='User' />
          <Storie imgSrc={storiePhoto} alt='User' />
          <Storie imgSrc={storiePhoto} alt='User' />
          <Storie imgSrc={storiePhoto} alt='User' />
          <Storie imgSrc={storiePhoto} alt='User' />
          <Storie imgSrc={storiePhoto} alt='User' />
          <Storie imgSrc={storiePhoto} alt='User' />
          <Storie imgSrc={storiePhoto} alt='User' />
          <Storie imgSrc={storiePhoto} alt='User' />
          <Storie imgSrc={storiePhoto} alt='User' />
          <Storie imgSrc={storiePhoto} alt='User' />
          <Storie imgSrc={storiePhoto} alt='User' />
          <Storie imgSrc={storiePhoto} alt='User' />
          <Storie imgSrc={storiePhoto} alt='User' />
          <Storie imgSrc={storiePhoto} alt='User' />
        </ul>
        <div className='Feed__arrow-container-right'>
          <RightCircleFilled onClick={this.handleScrollToRight} className='Feed__arrow' />
        </div>
      </div>
    )
  }
}
