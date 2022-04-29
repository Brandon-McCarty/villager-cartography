import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

import './LocationsItem.css'

// Material UI
import { Paper, Box } from '@material-ui/core'

// Display most beneficial information to user at a quick glance
function LocationsItem({ location }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const viewLocationDetails = () => {
        // Select location and send to details view
        console.log(`Viewing ${location.location_name}, ${location.id}`);
        dispatch({ type: 'GET_DETAILS', payload: location.id })
        history.push(`/details/${location.id}`)
    }

    return (
        <div>
            <Box
                p={1}
            >
                <Paper
                    height='400'
                    style={{
                        backgroundColor: "#C28340",
                        border: "1px solid black",
                        minHeight: '5vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                    align='center'
                >
                    <div onClick={viewLocationDetails}>{location.location_name} <span className="locations">{location.x_coordinate}, {location.y_coordinate}, {location.z_coordinate}</span> {location.explored_status ? '  Explored' : 'Unexplored'}</div>
                </Paper>
            </Box>
        </div>
    )
}

export default LocationsItem;