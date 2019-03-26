import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
import currentUserReducer from './reducers/currentUserReducer'
import selectedUserReducer from './reducers/selectedUserReducer'

const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogReducer,
  users: userReducer,
  currentUser: currentUserReducer,
  selectedUser: selectedUserReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store