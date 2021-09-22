import React, { Component } from 'react'
import StoriesContainer from '../../components/StoriesContainer'

import './Home.css'

export default class Home extends Component {
  
  componentDidMount(){
  }

  
  render() {
    return (
      <>
        <div className="Grid">
          
          <div className='Feed'>
            <div className="Feed__stories-container">
              <StoriesContainer />
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
