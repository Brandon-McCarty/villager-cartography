import {useDispatch} from 'react-redux'
import {useState} from 'react'

import EditLocationPopup from '../EditLocationPopup/EditLocationPopup';

// Display most beneficial information to user at a quick glance
function LocationsItem({location}) {

    const dispatch = useDispatch();

    const [locationDetailsTrigger, setLocationDetailsTrigger] = useState(false);

    const viewLocationDetails = () => {
        console.log(`Viewing ${location.location_name}, ${location.id}`);
        setLocationDetailsTrigger(true);
    }

    return (
        <div>
            <EditLocationPopup 
                locationDetailsTrigger={locationDetailsTrigger}
                setLocationDetailsTrigger={setLocationDetailsTrigger}
            />
            <div onClick={viewLocationDetails}>{location.location_name} {location.x_coordinate}, {location.y_coordinate}, {location.z_coordinate} {location.explored_status ? 'Explored' : 'Unexplored'}</div>
        </div>
    )
}

export default LocationsItem;