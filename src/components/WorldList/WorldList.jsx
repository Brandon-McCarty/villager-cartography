import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import WorldItem from '../WorldItem/WorldItem';
import Popup from '../Popup/Popup';

function WorldList() {

    const dispatch = useDispatch();
    const worlds = useSelector(store => store.worldsReducer)

    const [worldFormTrigger, setWorldFormTrigger] = useState(false);

    const addNewWorld = () => {
        console.log('ADD WORLD');
        setWorldFormTrigger(true);
    }

    useEffect(() => {
        // dispatch to get all worlds to display on the DOM
        dispatch({ type: 'GET_WORLDS' });
    }, []);

    return (
        <>
            <button onClick={addNewWorld}>ADD WORLD</button>
            <Popup
                trigger={worldFormTrigger}
                setTrigger={setWorldFormTrigger}
            />
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