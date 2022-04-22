import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

// Styles
import './WorldItem.css'

// Sweet Alert 2
import Swal from 'sweetalert2'


// Material UI
import { Paper, Box, Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

function WorldItem({ world }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const getLocations = () => {
        console.log(world.id)
        dispatch({ type: 'GET_LOCATIONS', payload: world.id })
        history.push(`/locations/${world.id}`)
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
                    }}
                >
                    <span
                        onClick={getLocations}
                        className='world-name'
                    >{world.world_name}</span>
                    <Button
                        style={{
                            justifyContent: 'center',
                            alignItems: 'flex-end'

                        }}
                        align=''
                        onClick={deleteWorld}
                    ><DeleteIcon />
                    </Button>
                </Paper>
            </Box>
        </div>
    )
}

export default WorldItem;