import { combineReducers } from 'redux-immutable'
import posts from './posts'
import postFilter from './postFilter'

const rootReducer = combineReducers({
  posts,
  postFilter
})

export default rootReducer
