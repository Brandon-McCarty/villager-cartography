import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import WorldItem from '../WorldItem/WorldItem';
import Popup from '../WorldFormPopup/WorldFormPopup';
import Header from '../Header/Header';

function WorldList() {

    const dispatch = useDispatch();
    const worlds = useSelector(store => store.worldsReducer)

    const [worldFormTrigger, setWorldFormTrigger] = useState(false);

    const addNewWorld = () => {
        // Allow the form to conditionally render
        setWorldFormTrigger(true);
    }

    useEffect(() => {
        // dispatch to get all worlds to display on the DOM
        dispatch({ type: 'GET_WORLDS' });
    }, []);

    return (
        <>
            <Header
                pageTitle='Worlds'
            />
            <button onClick={addNewWorld}>ADD WORLD</button>
            <Popup
                trigger={worldFormTrigger}
                setTrigger={setWorldFormTrigger}
            />
            <div>
                {worlds.map(world => {
                    return (
                        <WorldItem
                            key={world.id}
                            world={world}
                        />)
                })}
            </div>
        </>
    )
}

export default WorldList;