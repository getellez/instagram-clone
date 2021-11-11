import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { editProfileUrl } from '../../config/routes'
import { getPostsByUsername } from '../../api/posts/posts'
import './Profile.css'

export default function Profile () {
  const [posts, setPosts] = useState([])

  const loadPostsByUsername = async () => {
    const res = await getPostsByUsername('462b4358-4f93-48a4-b942-4e0d550b2526')
    setPosts(res.data)
  }

  useEffect(() => {
    loadPostsByUsername()
  }, [])

  return (
    <div className='Profile'>

      <div className='Grid'>

        <div className='Header'>
          <div className='Header__image-container'>
            <figure className='Header__figure'>
              <img className='Header__img' src='https://instagram-clone-germantellezv.s3.sa-east-1.amazonaws.com/germantellezv_182078343_1124520088029642_3286341659106403037_n.jpeg' alt='' />
            </figure>
          </div>
          <div className='Header__bio'>
            <div className='Header__bio-container'>
              <div className='Header__bio-username'>germantellezv</div>
              <div className='Header__bio-edit'>
                <button><strong><Link to='/germantellezv/edit'>Edit Profile</Link></strong></button>
              </div>
              <div className='Header__bio-settings'>
                ⚙️
              </div>
            </div>
            <div className='Header__bio-counters'>
              <ul>
                <li>45 posts</li>
                <li>455 followers</li>
                <li>544 following</li>
              </ul>
            </div>
            <div className='Header__bio-wrapper'>
              <p className='Header__bio-name'><strong>German Tellez Vanegas</strong></p>
              <p className='Header__bio-description'>Software Engineer 👨‍💻</p>
            </div>
          </div>
        </div>

        <div className='Posts'>
          {
            posts && (

              posts.map(post => {
                return (
                  <div key={post._id} className='Post__container'>
                    <figure className='Post__figure'>
                      <img className='Post__image' src={post.imageUrl} alt='' />
                    </figure>
                  </div>
                )
              })

            )
          }
        </div>

      </div>

    </div>
  )
}
