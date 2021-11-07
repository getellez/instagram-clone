import React, { Component } from 'react'

// Assets
import {
  HomeOutlined,
  MessageOutlined,
  CompassOutlined,
  HeartOutlined,
  CloudUploadOutlined,
  SmileOutlined
} from '@ant-design/icons'

import instagramLogo from './assets/logo-instagram.png'

import './Navbar.css'
import { Link } from 'react-router-dom'
import { createPostUrl, homeUrl } from '../../config/routes'

export default class Navbar extends Component {
  render () {
    return (
      <div className='Navbar'>
        <div className='Navbar__container'>
          <div className='Navbar__logo'>
            <picture>
              <Link to={homeUrl}>
                <img src={instagramLogo} alt='Instagram logo' />
              </Link>
            </picture>
          </div>

          <div className='Navbar__search'>
            <input type='text' name='search' placeholder='🔎 Search' />
          </div>

          <div className='Navbar__controls'>
            <ul>
              <li className='Navbar__controls-item'>
                <Link to={homeUrl}>
                  <HomeOutlined />
                </Link>
              </li>
              <li className='Navbar__controls-item'>
                <Link to=''>
                  <MessageOutlined />
                </Link>
              </li>
              <li className='Navbar__controls-item'>
                <Link to=''>
                  <CompassOutlined />
                </Link>
              </li>
              <li className='Navbar__controls-item'>
                <Link to=''>
                  <HeartOutlined />
                </Link>
              </li>
              <li className='Navbar__controls-item'>
                <Link to={createPostUrl}>
                  <CloudUploadOutlined />
                </Link>
              </li>
              <li className='Navbar__controls-item'>
                <Link to='/germantellezv'>
                  <SmileOutlined />
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>

    )
  }
}
