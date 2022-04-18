import {useDispatch} from 'react-redux'
import {useState} from 'react';

function WorldForm() {

    const dispatch = useDispatch();

    const [newWorld, setNewWorld] = useState('');


    // The user is able to add a new world
    const addNewWorld = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_WORLD', payload: {world_name: newWorld}})
    }

  return (
    <>
        <form action="submit">
            <input 
            placeholder="Enter World Name" 
            type="text"
            value={newWorld}
            onChange={(event) => setNewWorld(event.target.value)}
            />

            <p>This name cannot be changed!</p>

            <button onClick={addNewWorld}>Add World</button>
        </form>
    </>
  )
}

export default WorldForm;