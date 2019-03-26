import React from 'react'
import { Container } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'


import blogService from './services/blog'

import Notification from './components/Notification'
import BlogForm from './components/BlogForm'
import LogoutForm from './components/LogoutForm'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import BlogList from './components/BlogList'
import UserList from './components/UsersList'
import SimpleBlog from './components/SimpleBlog'

import { connect } from 'react-redux'
import { createNotification } from './reducers/notificationReducer'
import { initializeUsers } from './reducers/userReducer'
import { initializeBlogs } from './reducers/blogReducer'
import { login, logout, loginFromToken } from './reducers/currentUserReducer'
import { unSelectUser } from './reducers/selectedUserReducer'
import { unSelectBlog } from './reducers/selectedBlogReducer'

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
    this.props.unSelectBlog()
    this.setState({ page: newPage })
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
      <Container>
        <Notification message={this.props.notification} />
        {this.props.currentUser === null
          ? loginForm()
          : <div>
            <Menu>
              <Menu.Item onClick={() => this.handleButtonChange('blogs')}>blogs</Menu.Item >
              <Menu.Item onClick={() => this.handleButtonChange('users')}>users</Menu.Item >
              <Menu.Item>{this.props.currentUser.name} logged in</Menu.Item>
              <Menu.Item>{logoutForm()}</Menu.Item>
            </Menu>
            {!this.props.selectedBlog && this.state.page === 'blogs' &&                
            <Togglable buttonLabel="create">
              <BlogForm />
            </Togglable>}
            {this.props.selectedBlog === null
              ? <BlogList show={this.state.page === 'blogs'} blogs={this.props.blogs} currentUser={this.props.currentUser} />
              : <SimpleBlog onClick={this.addLike} />
            }
            <UserList show={this.state.page === 'users'} />
          </div>
        }
      </Container>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    notification: state.notification,
    currentUser: state.currentUser,
    selectedBlog: state.selectedBlog
  }
}

export default connect(
  mapStateToProps,
  { createNotification, initializeUsers, initializeBlogs, login, logout, loginFromToken, unSelectUser, unSelectBlog }
)(App)
