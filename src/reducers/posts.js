import { Set, Map } from "immutable"
import { PostRecord } from '../records'

const posts = (state = Set(), action) => {
  switch (action.type) {
    case 'ADD_POST':
      return state.add(action.post)
    case 'ADD_POSTS':
      return state.union(Set(action.posts))
    default:
      return state
  }
}

export default posts
