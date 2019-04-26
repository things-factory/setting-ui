import { UPDATE_SETTING_UI } from '../actions/main'

const INITIAL_STATE = {
  state_main: 'ABC'
}

const main = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SETTING_UI:
      return { ...state }

    default:
      return state
  }
}

export default main
