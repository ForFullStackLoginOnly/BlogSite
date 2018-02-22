import userService from '../services/user'

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_USER':
      return [...state, action.user]
    case 'INIT_USERS':
      return action.users
    case 'GET_USER':
      return action.user  
    default:
      return state
  }
}

export const initializeUsers = () => {
  return async (dispatch) => {
    const users = await userService.getAll()
    dispatch({
      type: 'INIT_USERS',
      users
    })
  }
}

export const createNew = (user) => {
  return async (dispatch) => {
    const user = await userService.create(user)
    dispatch({
      type: 'NEW_USER',
      user
    })
  }
}

export const getOne = (id) => {
  return async (dispatch) => {
    const user = await userService.getOne(id)
  }
  dispatch({
    type: 'GET_USER',
    user
  })
}



export default userReducer