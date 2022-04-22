import './LocationDetails.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

// Material UI
import { Paper, Box, Button } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Header from '../Header/Header';


function LocationDetails() {

  const details = useSelector(store => store.details);
  const history = useHistory();
  const dispatch = useDispatch();
  const id = useParams().id;

  const deleteLocation = () => {
    // Delete selected location
    console.log('DELETE', details.location_name);
    dispatch({ type: 'DELETE_LOCATION', payload: { id: details.id, world_id: details.world_id } })
    history.push(`/locations/${details.world_id}`)
  }


  const editLocation = () => {
    // Send to edit form
    console.log('EDIT');
    history.push(`/edit/${id}`)
  }

  const backToLocations = () => {
    // Send back to locations
    history.push(`/locations/${details.world_id}`)
  }


  useEffect(() => {
    // Get locations of world based on world id -- maybe change to join code for more security
    dispatch({ type: 'GET_DETAILS', payload: id });
  }, [id]);

  console.log(details);
  return (
    <div>

      <Header
        pageTitle={`${details.location_name} Details`}
      />

      <Button 
      style={{
        backgroundColor: '#4A6F28'
      }}
      onClick={backToLocations}
      ><ArrowBackIcon /> Locations</Button>

      <Box p={2}>
        <Paper
          align='center'
          style={{
            backgroundColor: "#C28340",
            border: "1px solid black",
            alignItems: 'center'
          }}
        >

          <h3>Coordinates: </h3>
          <p>{details.x_coordinate}, {details.y_coordinate}, {details.z_coordinate}</p>
          <h3>Comments:</h3>
          <p>{details.description}</p>
          <h3>{details.explored_status ? 'Explored' : 'Unexplored'}</h3>

          
          <Button
            style={{
              backgroundColor: '#4A6F28'
            }}
            onClick={editLocation}
          >
            Edit <EditIcon />
          </Button>
          
            <span className='btn-separator'> </span>

          <Button
          style={{
            backgroundColor: '#d43c2c'
          }}
            onClick={deleteLocation}
          >
            Delete <DeleteIcon />
          </Button>
          

        </Paper>
      </Box>
    </div>
  )
}

export default LocationDetails;