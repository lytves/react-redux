import React from 'react';
import ReactDOM from "react-dom";
// import {useState} from 'react';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

// ** REDUX:
// Reducer
const initState = {
    name: 'Ivan',
    age: 18
};
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_NAME':
        case 'ADD_AGE':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
// Action
const setName = (obj) => ({
    type: 'ADD_NAME',
    payload: obj
})
const setAge = (obj) => ({
    type: 'ADD_AGE',
    payload: obj
})
// Store - global object
const store = createStore(reducer);

// **REACT APP:
const App = () => {
    // this component define store data
    const dispatch = useDispatch()

    const changeName = () => {
        dispatch(setName({name: 'Leonid'}))
    }
    const changeAge = () => {
        dispatch(setAge({age: 23}))
    }
    return <div><h3>App component:</h3>
        <button onClick={changeName}>changeName</button>
        <button onClick={changeAge}>changeAge</button>
    </div>
}

const ViewName = () => {
    // this component has access to store datat
    const storeName = useSelector((state) => state.name)
    const storeAge = useSelector((state) => state.age)

    return <div>
        <hr/>
        <h3>ViewName component: store data is... {storeName} is {storeAge}</h3></div>
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
        <ViewName/>
    </Provider>,
    document.getElementById("root")
);

