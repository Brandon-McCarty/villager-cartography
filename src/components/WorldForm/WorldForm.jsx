import {useDispatch} from 'react-redux'

function WorldForm() {

    const dispatch = useDispatch();

    const addNewWorld = (event) => {
        event.preventDefault();
        console.log('ADDING WORLD');
        dispatch({type: 'ADD_WORLD'})
    }

  return (
    <>
        <form action="submit">
            <input placeholder="Enter World Name" type="text"/>
            <p>This name cannot be changed!</p>
            <button onClick={addNewWorld}>Add World</button>
        </form>
    </>
  )
}

export default WorldForm;