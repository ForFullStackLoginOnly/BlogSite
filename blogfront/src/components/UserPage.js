import React from 'react'
import { selectUser } from '../reducers/selectedUserReducer'
import { connect } from 'react-redux'

const UserPage = (props) => {
  console.log('los props', props)
  return (
    <div>
      <h2>{props.selectedUser.name}</h2>
      <p>{props.selectedUser.username}</p>
      <p>Added blogs</p>
      {props.selectedUser.blogs.map(b => 
        <li>{b.title}</li>
      )}
        </div>
  )
}


const mapStateToProps = (state) => {
  return {
    selectedUser: state.selectedUser
  }
}

export default connect(
  mapStateToProps,
  { selectUser }
)(UserPage)
