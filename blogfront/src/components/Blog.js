import React from 'react'
import blogService from '../services/blog'
import { connect } from 'react-redux'
import { selectBlog } from '../reducers/selectedBlogReducer'
import { Table } from 'semantic-ui-react'


class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  addLike = async (event) => {
    try {
      event.preventDefault()
      const changedBlog = await blogService.update(this.props.blog._id, {
        title: this.props.blog.title,
        author: this.props.blog.author,
        url: this.props.blog.url,
        user: this.props.blog.user,
        likes: this.props.blog.likes + 1
      })
      this.forceUpdate()
    } catch (exception) {
      console.log(exception)
    }
    setTimeout(() => {
      this.setState({ error: null })
    }, 3000)

  }

  deleteBlog = async (event) => {
    try {
      event.preventDefault()
      const deleteBlog = await blogService.remove(this.props.blog._id)
      this.forceUpdate()
    } catch (exception) {
      console.log(exception + 'delete blog error')
    }
  }

  selectBlogHandler = async (blog) => {
    console.log('bloggerino', blog)
    await this.props.selectBlog(blog)
  }

  render() {
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }

    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }
    const DeleteButton = () => {
      if (this.props.currentUser.username === this.props.blog.user.username || !this.props.blog.user.username) {
        return (
          <div>
            <button onClick={this.deleteBlog}>delete</button>
          </div>
        )
      }
      return (
        <div>
          You can only delete your own blogs
          </div>
      )
    }

    return (
      <Table>
        <div style={blogStyle} className="everything">
          <div className="authorAndTitle" onClick={this.toggleVisibility}>Show</div>
          <tr key={this.props.blog._id}>
            <a onClick={() => this.selectBlogHandler(this.props.blog)}>{this.props.blog.author}  {this.props.blog.title}</a>
          </tr>
          <div className="togglableContent" style={showWhenVisible}>
            <a href={this.props.blog.url}>{this.props.blog.url}</a>
            <p>{this.props.blog.likes} likes <button onClick={this.addLike}>like</button></p>
            <p>added by {this.props.blog.user.name}</p>
            <DeleteButton />
          </div>
        </div>
      </Table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    selectedBlog: state.selectedBlog
  }
}

export default connect(
  mapStateToProps,
  { selectBlog }
)(Blog)