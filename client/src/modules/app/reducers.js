import api from '../../services/api';
import setAuthorizationHeader from '../../utils/setAuthorizationHeader';
///// CONSTANTS /////
export const actionTypes = {
  'USER_LOGGED_IN': 'USER/LOGGED_IN',
  'USER_LOGGED_OUT': 'USER/LOGGED_OUT'
};

///// ACTIONS /////

// User
export const userLoggedIn = user => ({
  type: actionTypes.USER_LOGGED_IN,
  payload: user
});

export const userLoggedOut = () => ({
  type: actionTypes.USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.bookwormJWT = user.token;
    setAuthorizationHeader(user.token);
    dispatch(userLoggedIn(user));
  });

///// REDUCERS /////

// User
export const userReducer = (user = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGGED_IN:
      return action.payload;

    case actionTypes.USER_LOGGED_OUT:
      return {};

    default:
      return user;
  }
};

///// SELECTORS /////
