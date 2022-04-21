import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'


// Material UI
import { Paper, Box } from '@material-ui/core'

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
        dispatch({ type: 'DELETE_WORLD', payload: world.id })
    }

    return (
        <div>
            <Box 
            p={2} 
            >
                <Paper
                    align='center'
                    style={{
                        backgroundColor: "#C28340",
                        border: "1px solid black",
                    }}
                >
                    <p onClick={getLocations}>{world.world_name}<span>  </span><button onClick={deleteWorld}>DELETE</button></p>
                </Paper>
            </Box>
        </div>
    )
}

export default WorldItem;