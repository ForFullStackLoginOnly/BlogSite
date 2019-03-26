import React from 'react'
import { connect } from 'react-redux'
import { selectUser } from '../reducers/selectedUserReducer'
import UserPage from './UserPage'
import { Table } from 'semantic-ui-react'

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
    <Table striped celled>
      <Table.Body>
        <tr>
          <th>username</th>
          <th>name</th>
          <th>blogs created</th>
        </tr>
        {props.users.map(u =>
          <Table.Row key={u._id}>
            <Table.Cell><a onClick={() => selectUserHandler(u)}>{u.username}</a></Table.Cell>
            <Table.Cell>{u.name}</Table.Cell>
            <Table.Cell>{u.blogs.length}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
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




