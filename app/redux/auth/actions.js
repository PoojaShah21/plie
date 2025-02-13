const actions = {
  SET_USER_DATA: 'auth/SET_USER_DATA',
  SET_ACCESSTOKEN: 'auth/SET_ACCESSTOKEN',
  TOGGLE_FAVORITE: 'auth/TOGGLE_FAVORITE',

  setUserData: userData => dispatch =>
    dispatch({
      type: actions.SET_USER_DATA,
      userData,
    }),
  setAccessToken: accessToken => dispatch =>
    dispatch({
      type: actions.SET_ACCESSTOKEN,
      accessToken,
    }),
  toggleFavorite: event => dispatch =>
    dispatch({
      type: actions.TOGGLE_FAVORITE,
      payload: event,
    }),
};
export default actions;
