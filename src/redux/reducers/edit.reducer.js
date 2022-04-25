const editLocation = (state  = {}, action) => {
    if(action.type == 'CLEAR_EDIT') {
        return {};
    } else if(action.type === 'SET_EDIT_LOCATION') {
        return action.payload;
    } else if (action.type === 'EDIT_ONCHANGE_EXPLORED') {
        return {
            ...state,
            [action.payload.property] : action.payload.value
        }
    } else if (action.type === 'EDIT_ONCHANGE') {
        return {
            //keep old unchanged data...
            ...state,
            //update the property sent with the value sent
           [action.payload.property] : action.payload.value,

        }
    }
    return state;
}

export default editLocation;