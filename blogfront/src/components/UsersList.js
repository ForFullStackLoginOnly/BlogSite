import React from 'react'
import { connect } from 'react-redux'
import { selectUser } from '../reducers/selectedUserReducer'
import UserPage from './UserPage'

const UsersList = (props) => {

  if (!props.show) {
    return null
  }

  if (props.selectedUser) {
    return <UserPage/>
  }

  const selectUserHandler = async (user) => {
    await props.selectUser(user)
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>username</th>
          <th>name</th>
          <th>blogs created</th>
        </tr>
        {props.users.map(u =>
          <tr key={u._id}>
            <a onClick={() => selectUserHandler(u)}>{u.username}</a>
            <td>{u.name}</td>
            <td>{u.blogs.length}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    selectedUser: state.selectedUser
  }
}

export default connect(
  mapStateToProps,
  { selectUser }
)(UsersList)




