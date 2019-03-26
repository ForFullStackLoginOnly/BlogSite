import React from 'react'
import Blog from './components/Blog'
import blogService from './services/blog'
import loginService from './services/login'
import Notification from './components/Notification'
import BlogForm from './components/BlogForm'
import LogoutForm from './components/LogoutForm'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import { connect } from 'react-redux'
import { createNotification } from './reducers/notificationReducer'
import { initializeUsers } from './reducers/userReducer'
import { initializeBlogs } from './reducers/blogReducer'
import { login, logout, loginFromToken } from './reducers/currentUserReducer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      selectedBlog: null,
      user: null
    }
  }

  componentWillMount() {
    this.props.initializeUsers()
    this.props.initializeBlogs()
  }

  componentDidMount() {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      this.props.loginFromToken(JSON.parse(loggedUserJSON))
      blogService.setToken(JSON.parse(loggedUserJSON).token)
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  logout = async (event) => {
    event.preventDefault()
    try {
      window.localStorage.removeItem('loggedUser')
      await this.props.logout
    } catch (exception) {
      console.log(exception)
    }
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const credentials = ({
        username: this.state.username,
        password: this.state.password
      })
      await this.props.login(credentials)

      window.localStorage.setItem('loggedUser', JSON.stringify(this.props.currentUser))
      blogService.setToken(this.props.currentUser.token)
    } catch (exception) {
      this.props.createNotification({ message: `Wrong username or password` })
      console.log(exception)
    }
  }

  render() {
    const loginForm = () => (
      <LoginForm
        onSubmit={this.login}
        username={this.state.username}
        password={this.state.password}
        handleChange={this.handleChange}
      />
    )

    const logoutForm = () => (
      <LogoutForm
        onSubmit={this.logout}
      />
    )
    return (
      <div>
        <Notification message={this.props.notification} />
        {this.props.currentUser === null ?
          loginForm() :
          <div>
            <p>{this.props.currentUser.name} logged in</p>
            {logoutForm()}
            <Togglable buttonLabel="create">
              <BlogForm />
            </Togglable>
            <h2>blogs</h2>
            {this.props.blogs.map(blog =>
              <Blog key={blog._id} blog={blog} user={this.props.currentUser} />
            )}
          </div>

        }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    notification: state.notification,
    currentUser: state.currentUser
  }
}

export default connect(
  mapStateToProps,
  { createNotification, initializeUsers, initializeBlogs, login, logout, loginFromToken }
)(App)
