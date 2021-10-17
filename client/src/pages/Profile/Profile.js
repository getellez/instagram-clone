import React from 'react'

import './Profile.css'

export default function Profile() {
  return (
    <div className='Grid'>
      <div className="Header">
        <div className="Header__image"></div>
        <div className="Header__bio">

          <div className="Header__bio-username">
            <div>germantellezv</div>
            <div>
              <button><strong>Edit Profile</strong></button>
            </div>
            <div>
              ⚙️
            </div>
          </div>
          <div className="Header__bio-stats">
            
          </div>
        </div>
      </div>
      <div className="Posts"></div>
    </div>
  )
}
