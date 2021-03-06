//import actions
import {LOADING, SUCCESS, FAIL} from "../Actions/actions"

//create initial state
const initialState = {
   friends: [],
   error: null,
   loading: false
}

//create reducer with switch statement
const reducer = (state = initialState, action) => {
   switch(action.type) {
      case LOADING:
         return Object.assign({}, state, {loading: true})
      case SUCCESS:
         return Object.assign({}, state, {
            friends: action.payload,
            error: null,
            loading: false,
         })
      case FAIL:
         return Object.assign({}, state, {
            friends: [],
            error: action.error,
            loading: false
         })
      default:
         return state
   }
}

export default reducer