import '../LocationDetails/LocationDetails.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../Header/Header';

// Material UI
import { Paper, Box, Button, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function EditLocationForm() {

    const dispatch = useDispatch();
    const id = useParams().id;
    const history = useHistory();
    const editLocation = useSelector(store => store.editLocation);

    // Update and store the information to edit as it is being input
    const handleChange = (event, property) => {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: property, value: event.target.value }
        })
    }

    // Handle change for checkbox
    const handleExplored = (event) => {

        let exploredStatus = event.target.checked

        dispatch({
            type: 'EDIT_ONCHANGE_EXPLORED',
            payload: { property: 'explored_status', value: exploredStatus }
        })
    }

    // Delete chosen location
    const deleteLocation = () => {
        dispatch({ type: 'DELETE_LOCATION', payload: { id: editLocation.id, world_id: editLocation.world_id } })
        history.push(`/locations/${editLocation.world_id}`)
    }

    // Submit stored edit and update database
    const updateLocation = (event) => {
        event.preventDefault();
        dispatch({ type: 'UPDATE_LOCATION', payload: editLocation })
        dispatch({ type: 'CLEAR_EDIT' })
        history.push(`/details/${id}`)
    }

    useEffect(() => {
        // Get the information for the location to edit
        dispatch({ type: 'GET_EDIT_LOCATION', payload: id });
    }, [id]);


    console.log('EXPLORED STATUS IS', editLocation.explored_status);
    return (
        <div>

            <Header
                pageTitle={`Edit ${editLocation.location_name}`}
            />

            <Box p={1} height={300}>
                <Paper
                    style={{
                        backgroundColor: "#C28340",
                        border: "1px solid black",
                        minHeight: '50vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                    align='center'
                >

                    <form action="submit" onSubmit={updateLocation}>
                        <Box
                            pt={1}
                            pb={1}
                        >
                            <TextField
                                type="text"
                                id='outlined-basic'
                                label='Location Name'
                                variant='outlined'
                                value={editLocation.location_name || ''}
                                onChange={(event) => handleChange(event, 'location_name')}
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
                                value={editLocation.x_coordinate || ''}
                                onChange={(event) => handleChange(event, 'x_coordinate')}
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
                                value={editLocation.y_coordinate || ''}
                                onChange={(event) => handleChange(event, 'y_coordinate')}
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
                                value={editLocation.z_coordinate || ''}
                                onChange={(event) => handleChange(event, 'z_coordinate')}
                            />
                        </Box>

                        <Box
                            pt={2}
                            pb={2}
                        >
                            <input
                                type="checkbox"
                                id="explore"
                                name="explore"
                                defaultChecked={editLocation.explored_status}
                                onChange={handleExplored}
                            />
                            <label htmlFor="explore">Mark as Explored</label>
                            <p>Click above mark to toggle</p>
                            <p>Click a few times to revert to unexplored - fix coming</p>
                        </Box>

                        <Box
                            pt={1}
                            pb={1}
                        >
                            <TextField
                                id="outlined-textarea"
                                label="Description"
                                multiline
                                variant="outlined"
                                value={editLocation.description || ''}
                                onChange={(event) => handleChange(event, 'description')}
                            />
                        </Box>

                        <Button
                            style={{
                                backgroundColor: '#4A6F28',
                                color: 'white',
                            }}
                            type="submit"
                        ><EditIcon /> Update
                        </Button>

                        <span className='btn-separator'></span>

                        <Button
                            style={{
                                backgroundColor: '#d43c2c'
                            }}
                            onClick={deleteLocation}
                        ><DeleteIcon /> Delete
                        </Button>
                    </form>
                </Paper>
            </Box>
        </div>
    )
}

export default EditLocationForm;