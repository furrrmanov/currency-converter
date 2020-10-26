import { SET_LANGUAGE } from '@/actions'

const initialState = {
  selectedLanguage: 'en',
}

export default function language(state = initialState, { type, payload }) {
  switch (type) {
    case SET_LANGUAGE:
      return {
        ...state,
        selectedLanguage: payload,
      }

    default:
      return state
  }
}
