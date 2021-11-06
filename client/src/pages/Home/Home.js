import React, { Component } from 'react'
import PostList from '../../components/PostsList/PostList'
import StoriesContainer from '../../components/StoriesContainer'

import './Home.css'
import { getPostsByUsername } from '../../utils/api'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = { posts: []}
  }
  async componentDidMount(){
    const res = await getPostsByUsername('germantellezv', {})
    this.setState({ posts: res.data.reverse() })
  }

  render() {
    return (
      <div className="Home">
        <div className="Grid">
          
          <div className='Feed'>
            <div className="Feed__stories-container">
              <StoriesContainer />
            </div>
            
            <div className="Feed__posts">
              <PostList data={this.state.posts} />
            </div>
          </div>

          <div>
            <h1>Home4</h1>
            <h1>Home5</h1>
          </div>

        </div>
      </div>
    )
  }
}
