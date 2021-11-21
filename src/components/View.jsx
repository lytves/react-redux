import {useSelector} from 'react-redux';

const View = () => {
    // this component has access to store datat
    const storeName = useSelector((state) => state.nameReducer.name)
    const storeAge = useSelector((state) => state.ageReducer.age)

    return <div>
        <hr/>
        <h3>ViewName component: store data is... {storeName} is {storeAge}</h3></div>
}

export default View;
