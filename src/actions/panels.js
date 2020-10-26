export const SET_PANEL_REVERSE_REQUEST = 'SET_PANEL_REVERSE_REQUEST'
export const SET_REVERSE_PANEL = 'SET_REVERSE_PANEL'

export const setReversePanelRequest = () => ({
  type: SET_PANEL_REVERSE_REQUEST,
})

export const reversePanels = (value) => ({
  type: SET_REVERSE_PANEL,
  payload: value,
})
