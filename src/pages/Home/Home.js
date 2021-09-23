import React, { Component } from 'react'
import PostList from '../../components/PostsList/PostList'
import StoriesContainer from '../../components/StoriesContainer'

import imageGerman from '../../components/StoriesContainer/assets/profile_picture_german.png'
import './Home.css'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = { data: []}
  }
  componentDidMount(){

    const data = [
      {
        fullName: 'German Tellez Vanegas',
        username: 'germantellezv',
        location: 'Cartagena, Colombia',
        imageUrl: imageGerman
      }
    ]
    this.setState({data: data})
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
              <PostList data={this.state.data} />
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
