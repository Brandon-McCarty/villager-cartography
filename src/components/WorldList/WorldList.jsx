import {useDispatch} from 'react-redux'
import {useEffect} from 'react'

function WorldList() {

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch to get all worlds to display on the DOM
        dispatch({ type: 'GET_WORLDS' });
    }, []);

  return (
    <div>WorldList</div>
  )
}

export default WorldList;