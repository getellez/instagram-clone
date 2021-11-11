import React, { Component } from 'react'
import Post from '../Post'

export default class PostList extends Component {
  render () {
    return (
      <>
        {
          this.props.data.map((post, index) => {
            return (
              <Post
                key={index}
                username={post.username}
                location={post.location}
                description={post.description}
                imageUrl={post.imageUrl}
              />
            )
          })
        }
      </>
    )
  }
}
