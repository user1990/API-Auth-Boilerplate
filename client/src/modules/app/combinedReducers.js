import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { authReducer }from './reducers';

export default combineReducers({
  auth: authReducer,
  form: reduxForm
});
