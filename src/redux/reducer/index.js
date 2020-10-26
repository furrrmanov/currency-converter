import { combineReducers } from 'redux'
import charts from './chartsReducer'
import currency from './currencyReducer'
import panels from './panelsReducer'
import user from './userReducer'
import directory from './direcoryReducer'
import messages from './messagesReducer'
import language from './languageReducer'
import theme from './themeReducer'

export default combineReducers({
  currency,
  panels,
  charts,
  user,
  directory,
  messages,
  language,
  theme,
})
