import { useHistory } from 'react-router-dom';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';



function WorldItem({ world }) {

    const history = useHistory();

    const getLocations = () => {
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