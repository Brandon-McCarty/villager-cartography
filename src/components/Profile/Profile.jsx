import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import Header from '../Header/Header';


function Profile() {

    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const worlds = useSelector(store => store.worldsReducer)

    useEffect(() => {
        // dispatch to get all worlds to display on the DOM
        dispatch({ type: 'GET_WORLDS' });
    }, []);

  return (
    <div>
        <Header 
          pageTitle={`${user.username}'s Profile`}
        />
        <h1>{user.username}</h1>

        <ul>
            {worlds.map(world => {
                return(<li key={world.id}>{world.world_name}</li>)
            })}
        </ul>
    </div>
  )
}

export default Profile;