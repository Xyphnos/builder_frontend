import {createStore, combineReducers} from 'redux';
import scoreReducer from './reducers/scoreReducer';
import skillReducer from './reducers/skillReducer';
import profReducer from './reducers/proficiencyReducer'

const rootReducer = combineReducers({
    score: scoreReducer,
    skill: skillReducer,
    prof: profReducer,
});

export const store = createStore(rootReducer);