import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';

// Display most beneficial information to user at a quick glance
function LocationsItem({location}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const viewLocationDetails = () => {
        console.log(`Viewing ${location.location_name}, ${location.id}`);
        setLocationDetailsTrigger(true);
        dispatch({type: 'GET_DETAILS', payload: location.id})
        history.push(`/details/${location.id}`)
    }

    return (
        <div>
            <div onClick={viewLocationDetails}>{location.location_name} {location.x_coordinate}, {location.y_coordinate}, {location.z_coordinate} {location.explored_status ? 'Explored' : 'Unexplored'}</div>
        </div>
    )
}

export default LocationsItem;