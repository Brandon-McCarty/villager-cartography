import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import './WorldItem.css'


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