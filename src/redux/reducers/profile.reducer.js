const profileReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER_WORLDS':
      return action.payload;
    default:
      return state;
  }
};

export default profileReducer;