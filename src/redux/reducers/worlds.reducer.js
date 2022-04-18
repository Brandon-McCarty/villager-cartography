const worldsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_WORLDS':
        return action.payload;
      default:
        return state;
    }
  };

  export default worldsReducer;