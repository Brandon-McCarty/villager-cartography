import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Material UI
import { Button, Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import LocationsItem from '../LocationsItem/LocationsItem';
import LocationFormPopup from '../LocationFormPopup/LocationFormPopup';
import Header from '../Header/Header';

function LocationsList() {

    const dispatch = useDispatch();
    const locations = useSelector(store => store.locationsReducer);

    // Grab the world id from the params
    const id = useParams().id;

    // Trigger to activate location form
    const [locationFormTrigger, setLocationFormTrigger] = useState(false);

    useEffect(() => {
        // Get locations of world based on world id -- maybe change to join code for more security
        dispatch({ type: 'GET_LOCATIONS', payload: id });
    }, [id]);

    // Add a new location
    const addNewLocation = () => {
        setLocationFormTrigger(true);
    }

    return (
        <div>
            <Header
                pageTitle='Locations'
            />
            <Box
                pr={1}
                pb={1}
                style={{
                    display: 'flex',
                    justifyContent: 'end',
                }}

            >
                <Button
                    style={{
                        backgroundColor: "#4A6F28",
                    }}
                    onClick={addNewLocation}
                >
                    <AddIcon />
                </Button>
            </Box>
            <LocationFormPopup
                trigger={locationFormTrigger}
                setTrigger={setLocationFormTrigger}
            />

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