import { createStore } from 'redux';
import initialState from './initialState';

function reducer(state, action) {
    switch(action.type) {
        case 'switched':
          return { value: action.value };
        default:
          return state;
    }
}

const store = createStore(reducer, initialState);

export default store;
