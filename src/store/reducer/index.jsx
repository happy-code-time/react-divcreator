import { createStore } from 'redux';

import { addData, addKeys, addDescription } from '../actions';
/**
 * Reducer to add data
 * @param {object} state 
 * @param {object} action 
 */
const reducerData = ( state, action) => {
    switch (action.type) {
        case 'data': {
            return addData(state, action);
        }
        default : {
            return state;
        }
    }
}
/**
 * Reducer to add keys
 * @param {object} state 
 * @param {object} action 
 */
const reducerKeys = ( state, action) => {
    switch (action.type) {
        case 'keys': {
            return addKeys(state, action);
        }
        default : {
            return state;
        }
    }
}
/**
 * Reducer to add description
 * @param {object} state 
 * @param {object} action 
 */
const redurecDescription = ( state, action) => {
    switch (action.type) {
        case 'mainDescription': {
            return addDescription(state, action);
        }
        default : {
            return state;
        }
    }
}

const storeData = createStore(reducerData, []);
const storeKeys = createStore(reducerKeys, []);
const storeDescription = createStore(redurecDescription, []);

export {
    storeData,
    storeKeys,
    storeDescription
};