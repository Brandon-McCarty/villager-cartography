import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'


function WorldItem({ world }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const getLocations = () => {
        console.log(world.id)
        dispatch({type: 'GET_LOCATIONS', payload: world.id})
        history.push(`/locations/${world.id}`)
    }

    const deleteWorld = () => {
        console.log('DELETING WORLD', world.world_name);
        dispatch({type: 'DELETE_WORLD', payload: world.id})
    }

    return (
        <div >
            <li onClick={getLocations}>{world.world_name}</li>
            <button onClick={deleteWorld}>DELETE</button>
        </div>
    )
}

export default WorldItem;