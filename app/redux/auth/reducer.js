import types from './actions';

const initialState = {
  userData: {},
  accessToken: '',
  favorites: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_USER_DATA:
      return {
        ...state,
        userData: action.userData,
      };
    case types.SET_ACCESSTOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
      };
    case types.TOGGLE_FAVORITE: {
      const event = action.payload;
      const existingIndex = state.favorites.findIndex(
        fav => fav.title === event.title,
      );

      return {
        ...state,
        favorites:
          existingIndex !== -1
            ? state.favorites.filter(fav => fav.title !== event.title)
            : [...state.favorites, event],
      };
    }
    default:
      return state;
  }
}
