import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

// Material UI
import { Box, Button, TextField } from '@material-ui/core';

function LocationForm({ setTrigger }) {

    const dispatch = useDispatch();
    const id = useParams().id;

    // grab user input
    const [newLocationName, setNewLocationName] = useState('');
    const [xCoordinate, setXCoordinate] = useState('');
    const [yCoordinate, setYCoordinate] = useState('');
    const [zCoordinate, setZCoordinate] = useState('');
    const [exploredStatus, setExploredStatus] = useState(false);
    const [description, setDescription] = useState('');

    // Submit user input to create a new location
    const addLocation = (event) => {
        event.preventDefault();
        console.log(id);
        dispatch({
            type: 'ADD_LOCATION', payload: {
                location_name: newLocationName,
                x_coordinate: xCoordinate,
                y_coordinate: yCoordinate,
                z_coordinate: zCoordinate,
                description: description,
                explored_status: exploredStatus,
                world_id: id
            }
        })
        setTrigger(false);
    }

    return (
        <div>
            <form action="submit" onSubmit={addLocation}>
                <Box
                    pt={1}
                    pb={1}
                >
                    <TextField
                        id='outlined-basic'
                        label='Location Name'
                        type="text"
                        variant='outlined'
                        value={newLocationName}
                        onChange={(event) => setNewLocationName(event.target.value)}
                    />
                </Box>

                <Box
                    pt={1}
                    pb={1}
                >
                    <TextField
                        id='outlined-basic'
                        label='X Coordinate'
                        type="number"
                        variant='outlined'
                        value={xCoordinate}
                        onChange={(event) => setXCoordinate(event.target.value)}
                    />
                </Box>

                <Box
                    pt={1}
                    pb={1}
                >
                    <TextField
                        id='outlined-basic'
                        label='Y Coordinate'
                        type="number"
                        variant='outlined'
                        value={yCoordinate}
                        onChange={(event) => setYCoordinate(event.target.value)}
                    />
                </Box>

                <Box
                    pt={1}
                    pb={1}
                >
                    <TextField
                        id='outlined-basic'
                        label='Z Coordinate'
                        type="number"
                        variant='outlined'
                        value={zCoordinate}
                        onChange={(event) => setZCoordinate(event.target.value)}
                    />
                </Box>


                <input
                    type="checkbox"
                    id="explore"
                    name="explore"
                    checked={exploredStatus}
                    onChange={(event) => setExploredStatus(event.target.checked)}
                />
                <label htmlFor="explore">Mark as Explored</label>
                <Box
                    pt={1}
                    pb={1}
                >
                    <TextField
                        id="outlined-textarea"
                        label="Description"
                        multiline
                        variant="outlined"
                        type="text"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </Box>
                <Button
                    type='submit'
                    style={{
                        backgroundColor: "#4A6F28",
                    }}
                    onClick={addLocation}
                >Add Location</Button>
            </form>
        </div>
    )
}

export default LocationForm;