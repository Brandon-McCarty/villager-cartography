import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
  } from 'react-router-dom';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import LocationsList from '../LocationsList/LocationsList';



function WorldItem({ world }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const getLocations = () => {
        console.log(world.id);
        dispatch({ type: 'GET_LOCATIONS', payload: world.id});
        history.push('/locations')
    }

    return (
        <div onClick={getLocations}>
            <li>{world.world_name}</li>
            <button>DELETE</button>

            <ProtectedRoute
                exact
                path="/locations"
            >
                <LocationsList 
                    world={world}
                />
            </ProtectedRoute>
        </div>
    )
}

export default WorldItem;