import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

// Styles
import './WorldItem.css'

// Sweet Alert 2
import Swal from 'sweetalert2'

// Material UI
import { Paper, Box } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

function WorldItem({ world }) {

    const history = useHistory();
    const dispatch = useDispatch();

    // Get all locations associated with chosen world
    const getLocations = () => {
        console.log(world)
        dispatch({ type: 'GET_LOCATIONS', payload: world.id })
        history.push(`/locations/${world.world_id}`)
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
                </Paper>
            </Box>
        </div>
    )
}

export default WorldItem;