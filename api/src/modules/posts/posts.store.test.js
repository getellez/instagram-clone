/* eslint-env jest */

const { getPosts, createPost } = require('./posts.store')

describe('Posts', () => {
  describe('getPosts', () => {
    test('should return an array', async () => {
      const PostModel = {
        findAll: () => {
          return []
        }
      }
      const posts = await getPosts(PostModel, {})
      expect(Array.isArray(posts)).toBe(true)
    })
  })

  describe('createPost', () => {
    test('should return a JSON object', async () => {
      const PostModel = {
        create: (data) => {
          const resp = {
            toJSON: () => data
          }
          return resp
        }
      }
      const post = await createPost(PostModel, {})
      expect(typeof post).toBe('object')
    })
  })
})
