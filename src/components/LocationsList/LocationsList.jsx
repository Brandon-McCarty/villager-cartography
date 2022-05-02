import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Material UI
import { Button, Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';

import LocationsItem from '../LocationsItem/LocationsItem';
import LocationFormPopup from '../LocationFormPopup/LocationFormPopup';
import Header from '../Header/Header';

function LocationsList() {

    const dispatch = useDispatch();
    const locations = useSelector(store => store.locationsReducer);

    // Grab the world id from the params
    const id = useParams().id;

    // Trigger to activate popup
    const [trigger, setTrigger] = useState(false);

    // Trigger to activate location form
    const [locationFormTrigger, setLocationFormTrigger] = useState(false);

    // Trigger to activate message board
    const [messageTrigger, setMessageTrigger] = useState(false);

    useEffect(() => {
        // Get locations of world based on world id -- maybe change to join code for more security
        dispatch({ type: 'GET_LOCATIONS', payload: id });
    }, [id]);

    // Get form to add new location
    const addNewLocation = () => {
        setTrigger(true);
        setLocationFormTrigger(true);
    }

    // Show message board
    const showMessageBoard = () => {
        console.log('Going to message board for', id);
        setTrigger(true);
        setMessageTrigger(true);
        dispatch({ type: 'GET_MESSAGES', payload: id });
    }

console.log('LOCATIONS', locations);
    return (
        <div>
            <Header
                pageTitle='Locations'
            />

            <Box
                pr={1}
                pb={1}
            >
                <Button
                    onClick={showMessageBoard}
                    style={{
                        backgroundColor: "#4A6F28",
                        left: '20px',
                        color: 'white',
                        stroke: 'black',
                        strokeWidth: '0.3px'
                    }}
                >
                    <ForumIcon />
                </Button>

                <Button
                    style={{
                        backgroundColor: "#4A6F28",
                        position: 'absolute',
                        right: '20px'
                    }}
                    onClick={addNewLocation}
                >
                    <AddIcon
                        style={{
                            color: 'white',
                            textShadow: '0 0 0.8px black',
                            stroke: 'black',
                            strokeWidth: '0.1px'
                        }}
                    />
                </Button>
            </Box>

            <LocationFormPopup
                trigger={trigger}
                setTrigger={setTrigger}
                locationFormTrigger={locationFormTrigger}
                setLocationFormTrigger={setLocationFormTrigger}
                messageTrigger={messageTrigger}
                setMessageTrigger={setMessageTrigger}
                worldId={id}
            />

            {locations.map(location => {
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