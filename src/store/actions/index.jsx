/**
 * Method to add data to the current state
 * @param {object} state 
 * @param {object} action 
 */
const addData = (state, action) => {
    state = [];
    return state.concat(action.data);
};

/**
 * Method to add keys to the current state
 * @param {object} state 
 * @param {object} action 
 */
const addKeys = (state, action) => {
    state = [];
    return state.concat(action.keys);
};

/**
 * Method to add keys to the current state
 * @param {object} state 
 * @param {object} action 
 */
const addDescription = (state, action) => {
    state = [];
    return state.concat(action.mainDescription);
};

export {
    addData,
    addKeys,
    addDescription
}