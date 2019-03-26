const selectedBlogReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_BLOG':
      return action.selectedBlog
    case 'UNSELECT_BLOG':
      return null
    default:
      return state
  }
}


export const selectBlog = (blog) => {
  return async dispatch => {
    dispatch({
      type: 'SELECT_BLOG',
      selectedBlog: blog
    })
  }
}


export const unSelectBlog = () => {
  return async dispatch => {
    dispatch({
      type: 'UNSELECT_BLOG'
    })
  }
}



export default selectedBlogReducer