import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'

function WorldList() {

    const dispatch = useDispatch();
    const worlds = useSelector(store => store.worldsReducer)

    useEffect(() => {
        // dispatch to get all worlds to display on the DOM
        dispatch({ type: 'GET_WORLDS' });
    }, []);

  return (
    <div>
        <ul>
        {worlds.map(world => {
            return (<li key={world.id}>{world.world_name}</li>)
        })}
        </ul>
    </div>
  )
}

export default WorldList;