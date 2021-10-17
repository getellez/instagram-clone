import React, { useState } from 'react'

import './Post.css'

import {
  HeartOutlined,
  CommentOutlined,
  SendOutlined,
  SaveOutlined
  } from '@ant-design/icons';

export default function Post(props) {
  
  const [comments, setComments] = useState({
    comments: []
  })

  return (
    <div className="Post">
      <div className="Post__header">
        <figure className="Post__header-figure">
          <a href="/" className="Post__header-picture-link">
            <img className="Post__header-img" src={props.imageUrl} alt="Profile" />
          </a>
        </figure>
        
        <div className="Post__header-info">
          <div className="Post__header-username-container">
            <a href="/" className="Post__header-username">{props.username}</a>
          </div>
          {
            props.location && (
              <div>
                <a href="/" className="Post__header-location">{props.location}</a>
              </div>
            )
          }
        </div>
      </div>
      <div className="Post__image">
        <figure className="Post__image-figure">
          <img className="Post__image-img" src={props.imageUrl} alt={props.username} />
        </figure>
      </div>
      <div className="Post__controls">
        <div className="Post__controls-interaction">
          <HeartOutlined className="Post__controls-icon"/>
          <CommentOutlined className="Post__controls-icon"/>
          <SendOutlined className="Post__controls-icon"/>
        </div>
        <div>
          <SaveOutlined className="Post__controls-icon"/>
        </div>
      </div>
      <div className="Post__comments">
        <p>
          <strong>{props.username}</strong> {props.description} 
        </p>
      </div>
    </div>
  )
}
