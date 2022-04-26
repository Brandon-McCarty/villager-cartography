const joinCodeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_JOIN_CODE':
            return action.payload;
        case 'CLEAR_JOIN_CODE':
            return {};
      default:
            return state;
    }
};

export default joinCodeReducer;