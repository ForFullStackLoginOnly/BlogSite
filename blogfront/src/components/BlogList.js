import React from 'react'
import Blog from './Blog'

const BlogList = (props) => {

  if (!props.show) {
    return null
  }

  return (
    <div>
      <h2>blogs</h2>
      {props.blogs.map(blog =>
        <Blog key={blog._id} blog={blog} user={props.currentUser} />
      )}
    </div>
  )
}

export default BlogList