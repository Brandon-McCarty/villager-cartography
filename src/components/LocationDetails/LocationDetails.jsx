import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'


function LocationDetails() {

    const details = useSelector(store => store.details);

  return (
    <div>
        <h3>DETAILS</h3>
    </div>
  )
}

export default LocationDetails;