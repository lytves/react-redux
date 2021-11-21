// **REACT APP:
import {useDispatch} from 'react-redux';
import {setAge, setName} from "../store/actions";

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

export default App;
