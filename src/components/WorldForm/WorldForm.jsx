import {useDispatch} from 'react-redux'
import {useState} from 'react';

// Material UI
import {TextField, Button, Box } from '@material-ui/core';

function WorldForm({setTrigger}) {

    const dispatch = useDispatch();

    const [newWorld, setNewWorld] = useState('');
    const [joinCode, setJoinCode] = useState('');


    // The user is able to add a new world
    const addNewWorld = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_WORLD', payload: {world_name: newWorld}})
        setTrigger(false);
        setNewWorld('');
        
    }

    // User can enter join code to join an existing world
    const joinWorld = () => {
      console.log('JOIN');
      dispatch({type: 'JOIN_WORLD', payload: {join_code: joinCode}});
      setTrigger(false);
      setJoinCode('');
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
          <Box
            pt={2}
          >
        <h2>Join a World</h2>
        </Box>

        <form action="submit">
            <TextField
            id='outlined-basic'
            label='Enter Join Code'
            type="text"
            value={joinCode}
            onChange={(event) => setJoinCode(event.target.value)}
            />
            
            <Box
              pt={1}
            >
            <Button 
            style={{
              backgroundColor: "#4A6F28",   
          }}
            onClick={joinWorld}
            >Join World</Button>
            </Box>
        </form>
    </>
  )
}

export default WorldForm;