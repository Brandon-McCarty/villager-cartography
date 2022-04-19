import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import LocationsItem from '../LocationsItem/LocationsItem';
import LocationFormPopup from '../LocationFormPopup/LocationFormPopup';

function LocationsList() {

    const dispatch = useDispatch();
    const locations = useSelector(store => store.locationsReducer);

    // Grab the world id from the params
    const id = useParams().id;

    const [locationFormTrigger, setLocationFormTrigger] = useState(false);

    useEffect(() => {
        // Get locations of world based on world id -- maybe change to join code for more security
        dispatch({ type: 'GET_LOCATIONS', payload: id });
    }, [id]);

    const addNewLocation = () => {
        console.log('ADDING LOCATION');
        setLocationFormTrigger(true);
    }

    return (
        <div>
            <button onClick={addNewLocation}>Add Location</button>
            <LocationFormPopup
                trigger={locationFormTrigger}
                setTrigger={setLocationFormTrigger}
            />

            <p>LOCATIONS</p>
            {locations?.map(location => {
                return (
                    <LocationsItem
                        key={location.id}
                        location={location}
                        setTrigger={setLocationFormTrigger}
                    />)
            })}
        </div>
    )
}

export default LocationsList;