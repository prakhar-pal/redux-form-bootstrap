import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const reducers = {
    form: formReducer
}
export const store = createStore(combineReducers(reducers));