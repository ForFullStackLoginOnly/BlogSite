import React from 'react'

import blogService from './services/blog'

import Notification from './components/Notification'
import BlogForm from './components/BlogForm'
import LogoutForm from './components/LogoutForm'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import BlogList from './components/BlogList'
import UserList from './components/UsersList'
import { connect } from 'react-redux'
import { createNotification } from './reducers/notificationReducer'
import { initializeUsers } from './reducers/userReducer'
import { initializeBlogs } from './reducers/blogReducer'
import { login, logout, loginFromToken } from './reducers/currentUserReducer'
import { unSelectUser } from './reducers/selectedUserReducer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      selectedBlog: null,
      user: null,
      page: 'blogs'
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

  handleButtonChange = (newPage) => {
    this.props.unSelectUser()
    this.setState({ page: newPage })
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
        {this.props.currentUser === null
          ? loginForm()
          : <div>
            <div>
              <p>{this.props.currentUser.name} logged in</p>
              <button onClick={() => this.handleButtonChange('blogs')}>blogs</button>
              <button onClick={() => this.handleButtonChange('users')}>users</button>
              {logoutForm()}
            </div>
            <Togglable buttonLabel="create">
              <BlogForm />
            </Togglable>
            <BlogList show={this.state.page === 'blogs'} blogs={this.props.blogs} currentUser={this.props.currentUser} />
            <UserList show={this.state.page === 'users'} />

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
  { createNotification, initializeUsers, initializeBlogs, login, logout, loginFromToken, unSelectUser }
)(App)
