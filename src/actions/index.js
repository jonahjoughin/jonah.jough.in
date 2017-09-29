let nextTodoId = 0
export const addPost = post => {
  return {
    type: 'ADD_POST',
    post
  }
}
export const addPosts = posts => {
  return {
    type: 'ADD_POSTS',
    posts
  }
}

export const setFilter = filter => {
  return {
    type: 'SET_FILTER',
    filter
  }
}
