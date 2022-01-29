import {createStore, combineReducers} from 'redux';
import scoreReducer from './reducers/scoreReducer'

const rootReducer = combineReducers({
    score: scoreReducer,
});

export const store = createStore(rootReducer);