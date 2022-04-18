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

    return (
        <div onClick={getLocations}>
            <li>{world.world_name}</li>
            <button>DELETE</button>
        </div>
    )
}

export default WorldItem;