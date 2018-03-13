import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { userReducer }from './reducers';

export default combineReducers({
  auth: userReducer,
  form: reduxForm
});
