import {useDispatch} from 'react-redux'
import {useState} from 'react';

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
            <label htmlFor="name-input">World Name:</label>
            <input
            id="name-input"
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