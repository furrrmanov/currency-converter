import { SET_USER_INFO, LOGOUT_USER, SET_USER_REQUEST } from '@/actions'

const initialState = {
  isLogged: false,
  name: '',
  photoUrl: '',
}

export default function user(state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER_REQUEST:
      return {
        ...state
      }
    
    case SET_USER_INFO:
      return {
        ...state,
        isLogged: true,
        name: payload.name,
        photoUrl: payload.photoUrl,
      }

    case LOGOUT_USER:
      return {
        ...state,
        ...state.user,
        isLogged: payload,
      }

    default:
      return state
  }
}
