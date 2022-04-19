import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'


function LocationDetails() {

    const details = useSelector(store => store.details);
    const dispatch = useDispatch();
    const id = useParams().id;


    useEffect(() => {
        // Get locations of world based on world id -- maybe change to join code for more security
        dispatch({ type: 'GET_DETAILS', payload: id });
    }, [id]);

    console.log(details);
  return (
    <div>
        <h3>Name: {details.location_name}</h3>
    </div>
  )
}

export default LocationDetails;