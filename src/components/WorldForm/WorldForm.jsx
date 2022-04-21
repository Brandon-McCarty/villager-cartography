import {useDispatch} from 'react-redux'
import {useState} from 'react';

// Material UI
import {TextField, Button } from '@material-ui/core';

function WorldForm({setTrigger}) {

    const dispatch = useDispatch();

    const [newWorld, setNewWorld] = useState('');


    // The user is able to add a new world
    const addNewWorld = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_WORLD', payload: {world_name: newWorld}})
        setTrigger(false);
        setNewWorld('');
        
    }

  return (
    <>

        <h2>Add a New World</h2>
        <form action="submit">
            <TextField
            id='outlined-basic'
            label='Enter World Name'
            type="text"
            value={newWorld}
            onChange={(event) => setNewWorld(event.target.value)}
            />

            <p>This name cannot be changed!</p>

            <Button 
            style={{
              backgroundColor: "#4A6F28",   
          }}
            onClick={addNewWorld}
            >Add World</Button>
        </form>
    </>
  )
}

export default WorldForm;