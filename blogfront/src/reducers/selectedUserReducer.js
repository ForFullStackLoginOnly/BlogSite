const selectedUserReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_USER':
      return action.selectedUser
    case 'UNSELECT_USER':
      return null
    default:
      return state
  }
}


export const selectUser = (user) => {
  return async dispatch => {
    dispatch({
      type: 'SELECT_USER',
      selectedUser: user
    })
  }
}


export const unSelectUser = () => {
  return async dispatch => {
    dispatch({
      type: 'UNSELECT_USER'
    })
  }
}



export default selectedUserReducer