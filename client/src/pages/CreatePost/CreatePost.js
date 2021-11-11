import React, { useState } from 'react'
import './CreatePost.css'
import { Button } from '../../components/StyledComponents/Button'
import { Input } from '../../components/StyledComponents/Input'
import { createPost } from '../../api/posts/posts'

export default function CreatePost () {
  const [fileUploaded, setFileUploaded] = useState(false)
  const [post, setPost] = useState({
    filename: '',
    file: '',
    srcPreview: '',
    description: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('file', post.file)
    formData.append('description', post.description)

    try {
      const params = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const res = await createPost(formData, params)

      setPost({
        ...post,
        srcPreview: res.data.imageUrl
      })

      setFileUploaded(true)
    } catch (error) {
      console.log('💥 Hubo un problema con el server...')
    }
  }

  const handleChange = ({ target }) => {
    setPost({
      ...post,
      [target.name]: target.value
    })
  }

  const handleFileChange = ({ target }) => {
    setPost({
      ...post,
      filename: target.files[0].name,
      file: target.files[0]
    })
  }

  return (
    <div className='CreatePost'>

      <div className='Grid'>

        <div className='Preview'>
          <h1 className='Preview__title'>Preview</h1>
          {post.srcPreview && (
            <figure className='Previeww__figure'>
              <img className='Preview__image' src={post.srcPreview} alt='preview' />
              <small>{post.description && post.description}</small>
            </figure>
          )}
        </div>

        <div className='Form'>
          <p className='Form__title'>Add new post</p>

          <form onSubmit={handleSubmit}>
            <div className='Form_element'>
              <label>Description</label>
              <Input type='text' name='description' value={post.description} onChange={handleChange} />
            </div>
            <div className='Form_element'>
              <label>Upload image</label>
              <input id='Post__photo' type='file' name='file' onChange={handleFileChange} />
              <label htmlFor='Post__photo'>{post.filename}</label>
            </div>

            <Button type='submit'> Upload </Button>

            {fileUploaded && (
              <div className='Form__message'>
                The post was created successfully
              </div>
            )}

          </form>

        </div>

      </div>

    </div>
  )
}
