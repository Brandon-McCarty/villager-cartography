import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import WorldItem from '../WorldItem/WorldItem';

function WorldList() {

    const dispatch = useDispatch();
    const worlds = useSelector(store => store.worldsReducer)

    const addNewWorld = () => {
        
    }

    useEffect(() => {
        // dispatch to get all worlds to display on the DOM
        dispatch({ type: 'GET_WORLDS' });
    }, []);

  return (
    <>
        <button onClick={addNewWorld}>ADD WORLD</button>
        <ul>
        {worlds.map(world => {
            return (
            <WorldItem 
                key={world.id}
                world={world}
            />)
        })}
        </ul>
    </>
  )
}

export default WorldList;