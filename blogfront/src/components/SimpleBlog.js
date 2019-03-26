import React from 'react'
import { connect } from 'react-redux'

const SimpleBlog = (props) => (
  <div>
    <div className="titleAndAuthor">
      {props.selectedBlog.title} {props.selectedBlog.author}
    </div>
    <div className="likes">
      blog has {props.selectedBlog.likes} likes
      <button onClick={props.onclick}>likes</button>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    selectedBlog: state.selectedBlog
  }
}

export default connect(
  mapStateToProps,
  null
)(SimpleBlog)