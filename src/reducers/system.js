import { UPDATE_SYSTEM } from '../actions/system'

const INITIAL_STATE = {
  version: '1.0.0',
  license: 'MIT'
}

const system = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SYSTEM:
      return { ...state }

    default:
      return state
  }
}

export default system
