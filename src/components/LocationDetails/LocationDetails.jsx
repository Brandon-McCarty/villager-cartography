import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'



function LocationDetails() {

    const details = useSelector(store => store.details);
    const history = useHistory();
    const dispatch = useDispatch();
    const id = useParams().id;

    const deleteLocation = () => {
        console.log('DELETE');
        dispatch({type: 'DELETE_LOCATION', payload: {id: details.id, world_id: details.world_id}})
        history.push(`/locations/${details.world_id}`)
    }

    
    const editLocation = () => {
        console.log('EDIT');
        history.push(`/edit/${id}`)
    }


    useEffect(() => {
        // Get locations of world based on world id -- maybe change to join code for more security
        dispatch({ type: 'GET_DETAILS', payload: id });
    }, [id]);

    console.log(details);
  return (
    <div>
        <h2>{details.location_name}</h2>
        <h3>Coordinates: </h3>
        <p>{details.x_coordinate}, {details.y_coordinate}, {details.z_coordinate}</p>
        <h3>Comments:</h3>
        <p>{details.description}</p>
        <h3>{details.explored_status ? 'Explored' : 'Unexplored'}</h3>

        <button onClick={editLocation}>Edit</button>
        <button onClick={deleteLocation}>Delete</button>
    </div>
  )
}

export default LocationDetails;