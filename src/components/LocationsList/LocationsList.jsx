import { useDispatch, useSelector } from 'react-redux'


function LocationsList() {

    const dispatch = useDispatch();
    const locations = useSelector(store => store.locationsReducer);

  return (
    <div>
        <p>LOCATIONS</p>
        {locations?.map(location => {
            return(<div key={location.id}>{location.location_name}</div>)
        })}
    </div>
  )
}

export default LocationsList;