import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import Header from '../Header/Header';

// Material UI
import {Grid, Paper} from '@material-ui/core' 

function EditLocationForm() {

    const dispatch = useDispatch();
    const id = useParams().id;
    const history = useHistory();
    const editLocation = useSelector(store => store.editLocation);


    const handleChange = (event, property) => {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: {property: property, value: event.target.value}
        })
    }

    const handleExplored = (event) => {

        let exploredStatus = event.target.checked
        console.log(exploredStatus);
        dispatch({
            type: 'EDIT_ONCHANGE_EXPLORED',
            payload: {property: 'explored_status', value: exploredStatus}
        })
    }


    const updateLocation = (event) => {
        event.preventDefault();
        dispatch({type: 'UPDATE_LOCATION', payload: editLocation})
        dispatch({type: 'CLEAR_EDIT'})
        history.push(`/details/${id}`)
    }

    useEffect(() => {
        // Get locations of world based on world id -- maybe change to join code for more security
        dispatch({ type: 'GET_EDIT_LOCATION', payload: id });
    }, [id]);

    return (
        <div>
            <Header 
                pageTitle={`Edit ${editLocation.location_name}`}
            />
            <form action="submit" onSubmit={updateLocation}>
                <input
                    type="text"
                    placeholder="Location Name"
                    value={editLocation.location_name}
                    onChange={(event) => handleChange(event, 'location_name')}
                />
                <input
                    type="number"
                    placeholder="X Coordinate"
                    value={editLocation.x_coordinate}
                    onChange={(event) => handleChange(event, 'x_coordinate')}
                />
                <input
                    type="number"
                    placeholder="Y Coordinate"
                    value={editLocation.y_coordinate}
                    onChange={(event) => handleChange(event, 'y_coordinate')}
                />
                <input
                    type="number"
                    placeholder="Z Coordinate"
                    value={editLocation.z_coordinate}
                    onChange={(event) => handleChange(event, 'z_coordinate')}
                />
                <br />

                <input
                    type="checkbox"
                    id="explore"
                    name="explore"
                    defaultChecked={editLocation.explored_status}
                    onChange={handleExplored}
                />
                <label htmlFor="explore">Mark as Explored</label>

                <br />

                <textarea
                    rows="5"
                    cols="30"
                    type="text"
                    placeholder="Description"
                    value={editLocation.description}
                    onChange={(event) => handleChange(event, 'description')}
                />
                <br />
                <button type="submit">Update Location</button>
                <button>Delete</button>
            </form>
        </div>
    )
}

export default EditLocationForm;