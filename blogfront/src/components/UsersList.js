import React from 'react'
import { connect } from 'react-redux'

const UsersList = (props) => {

  if (!props.show) {
    return null
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
          <tr key={u.id}>
            <td>{u.username}</td>
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
    users: state.users
  }
}

export default connect(
  mapStateToProps,
  null
)(UsersList)




