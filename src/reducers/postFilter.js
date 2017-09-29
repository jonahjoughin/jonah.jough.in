import { Map } from 'immutable'

const postFilter = (state = Map({string: ''}), action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return state.update('string', value => state.string)
    default:
      return state
  }
}

export default postFilter
