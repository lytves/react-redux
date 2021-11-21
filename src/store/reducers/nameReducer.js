// Reducer
const initState = {
    name: 'Ivan'
};
const nameReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export default nameReducer
