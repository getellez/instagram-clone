/* eslint-env jest */

const { getPosts } = require('./posts.store')

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
})
