export const SET_USER_REQUEST = 'SET_USER_REQUEST'
export const SET_USER_INFO = 'SET_USER_INFO'
export const LOGOUT_USER = 'LOGOUT_USER'

export const setUserInfo = (value) => ({
  type: SET_USER_INFO,
  payload: value,
})

export const userLogOut = (value) => ({
  type: LOGOUT_USER,
  payload: value,
})

export const SetuserSingInRequest = () => ({
  type: SET_USER_REQUEST,
})
