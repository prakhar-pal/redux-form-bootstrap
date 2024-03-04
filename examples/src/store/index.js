import { createStore, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
const reducers = {
    form: formReducer
}
export const store = createStore(
    combineReducers(reducers), 
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);