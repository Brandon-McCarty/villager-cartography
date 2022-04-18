import { useDispatch, useSelector } from 'react-redux'
import LocationsItem from '../LocationsItem/LocationsItem';
import { useParams } from 'react-router-dom'
import {useEffect} from 'react'


function LocationsList() {

    const dispatch = useDispatch();
    const locations = useSelector(store => store.locationsReducer);
    const id = useParams().id;

    useEffect(() => {
        dispatch({type: 'GET_LOCATIONS', payload: id});
    }, []);


    console.log('ID IS', id);
  return (
    <div>
        <p>LOCATIONS</p>
        {locations?.map(location => {
            return(
            <LocationsItem 
                key={location.id}
                location={location}
            />)
        })}
    </div>
  )
}

export default LocationsList;