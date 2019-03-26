import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'

import { createNewBlog } from '../reducers/blogReducer'
import { createNotification } from '../reducers/notificationReducer'

class BlogForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      title: '',
      url: ''
    }
  }

  addBlog = async (event) => {
    try {
      event.preventDefault()

      if (this.state.title.length < 5) {
        this.props.createNotification({ message: `Title of blog ${this.state.title.length} must be atleast 5 characters` })
      } else if (this.state.author < 5) {
        this.props.createNotification({ message: `Author of blog ${this.state.title.length} must be atleast 5 characters` })
      } else {
        const newBlog = {
          title: this.state.title,
          author: this.state.author,
          url: this.state.url
        }
        this.props.createNewBlog(newBlog)

        this.props.createNotification({ message: `A new blog ${this.state.title} by ${this.state.author} added` })

        this.setState({
          title: '',
          author: '',
          url: '',
        })
      }
    } catch (ex) {
      this.setState({
        error: `couldn't add new blog due to an error: ${ex}`
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 3000)
    }
  }
  render() {
    return (
      <div>
        <h2>Create new Blog</h2>

        <Form onSubmit={this.addBlog}>
          <Form.Input label="title">
          <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={({ target }) => this.setState({ title: target.value })}
            />
          </Form.Input>
          <Form.Input label="author">
          <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={({ target }) => this.setState({ author: target.value })}
            />
          </Form.Input>
          <Form.Input label="url">
          <input
              type="text"
              name="url"
              value={this.state.url}
              onChange={({ target }) => this.setState({ url: target.value })}
            />
          </Form.Input>
          <Form.Button type='submit'>create</Form.Button>
        </Form>
      </div >
    )
  }
}

export default connect(
  null,
  { createNewBlog, createNotification }
)(BlogForm)
