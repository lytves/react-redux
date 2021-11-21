// Reducer
const initState = {
    age: 18
};
const ageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default ageReducer
