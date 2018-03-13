///// CONSTANTS /////
export const actionTypes = {
  FETCH_USER: 'FETCH/USER'
};

///// ACTIONS /////

///// REDUCERS /////
export const authReducer = (auth = null, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return action.payload || false;
    default:
      return auth;
  }
}
