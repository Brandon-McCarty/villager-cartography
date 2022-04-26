import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import WorldFormPopup from '../Popup/Popup';

// Styles
import './WorldItem.css'

// Sweet Alert 2
import Swal from 'sweetalert2'

// Material UI
import { Paper, Box } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

function WorldItem({ world, trigger, setTrigger, joinCodeTrigger, setJoinCodeTrigger }) {

    const history = useHistory();
    const dispatch = useDispatch();

    // Get all locations associated with chosen world
    const getLocations = () => {
        console.log('WORLD IS', world)
        dispatch({ type: 'GET_LOCATIONS', payload: world.id })
        history.push(`/locations/${world.id}`)
    }

    // Display the join code of the world
    const getJoinCode = () => {
        setTrigger(true);
        setJoinCodeTrigger(true);
        dispatch({ type: 'SET_JOIN_CODE', payload: { join_code: world.join_code } })
    }

    const deleteWorld = () => {

        console.log('DELETING WORLD', world.world_name);

        Swal.fire({
            title: `Are you sure you want to delete ${world.world_name}?`,
            text: "This cannot be undone.",
            icon: 'warning',
            background: '#C28340',
            color: 'black',
            showCancelButton: true,
            confirmButtonColor: '#4A6F28',
            cancelButtonColor: '#d43c2c',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({ type: 'DELETE_WORLD', payload: world.id })
                Swal.fire({
                    background: '#C28340',
                    color: 'black',
                    confirmButtonColor: '#4A6F28',
                    title: 'Deleted!',
                    text: `${world.world_name} has been deleted.`,
                    icon: 'success'
                })
            }
        })
    }

    return (
        <div>
            <WorldFormPopup />

            <Box
                p={1}
            >
                <Paper
                    align='center'
                    style={{
                        backgroundColor: "#C28340",
                        border: "1px solid black",
                        minHeight: '5vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <span
                        onClick={getLocations}
                        className='world-name'
                    >{world.world_name}

                    </span>

                    <button className='delete-btn'
                        onClick={deleteWorld}
                    ><DeleteIcon />
                    </button>

                    <button
                        onClick={getJoinCode}
                        className='info-btn'>
                        <InfoIcon />
                    </button>

                </Paper>
            </Box>
        </div>
    )
}

export default WorldItem;