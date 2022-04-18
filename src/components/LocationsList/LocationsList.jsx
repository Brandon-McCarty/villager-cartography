import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function LocationsList({world}) {

    const dispatch = useDispatch();
    const locations = useSelector(store => store.locationsReducer);

    // const [worldFormTrigger, setWorldFormTrigger] = useState(false);

    // const addNewWorld = () => {
    //     // Allow the form to conditionally render
    //     setWorldFormTrigger(true);
    // }

    useEffect(() => {
        // dispatch to get all locations for current world
        dispatch({ type: 'GET_LOCATIONS', payload: {id: world.id}});
    }, []);

  return (
    <div>

    </div>
  )
}

export default LocationsList;