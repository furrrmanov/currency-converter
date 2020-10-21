import { SET_USER_INFO, USER_LOGOUT } from "./type";

const initialState = {
  isLogged: false,
  name: "",
  photoUrl: "",
};

export default function user(state = initialState, { type, payload }) {
  switch (type) {

    case SET_USER_INFO:
      return {
        ...state,
        isLogged: true,
        name: payload.name,
        photoUrl: payload.photoUrl,
      };

      case USER_LOGOUT:
        return {
          ...state,
          ...state.user,
          isLogged: payload,
        };

    default:
      return state;
  }
}
