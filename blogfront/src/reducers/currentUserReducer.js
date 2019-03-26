import loginService from '../services/login'

const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.currentUser
    case 'LOGOUT':
      return null
    default:
      return state
  }
}


export const login = (creadentials) => {
  return async dispatch => {
    const currentUser = await loginService.login(creadentials)
    dispatch({
      type: 'LOGIN',
      currentUser
    })
  }
}


export const loginFromToken = (currentUser) => {
  return async dispatch => {
    dispatch({
      type: 'LOGIN',
      currentUser
    })
  }
}


export const logout = () => {
  return async dispatch => {
    dispatch({
      type: 'LOGOUT'
    })
  }
}

export default currentUserReducer