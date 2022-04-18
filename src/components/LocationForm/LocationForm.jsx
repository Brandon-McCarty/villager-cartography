import {useDispatch} from 'react-redux'
import {useState} from 'react';

function LocationForm() {

    const [newLocationName, setNewLocationName] = useState('');
    const [xCoordinate, setXCoordinate] = useState('');
    const [yCoordinate, setYCoordinate] = useState('');
    const [zCoordinate, setZCoordinate] = useState('');
    const [exploredStatus, setExploredStatus] = useState(false);
    const [description, setDescription] = useState('');

    const addLocation = (event) => {
        event.preventDefault();
        console.log(exploredStatus);
    }

    return (
        <div>
            <form action="submit" onSubmit={addLocation}>
                <input
                    type="text"
                    placeholder="Location Name"
                    value={newLocationName}
                    onChange={(event) => setNewLocationName(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="X Coordinate"
                    value={xCoordinate}
                    onChange={(event) => setXCoordinate(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Y Coordinate"
                    value={yCoordinate}
                    onChange={(event) => setYCoordinate(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Z Coordinate"
                    value={zCoordinate}
                    onChange={(event) => setZCoordinate(event.target.value)}
                />
                <br />
                
                <input 
                    type="checkbox"
                    id="explore"
                    name="explore"
                    checked={exploredStatus}
                    onChange={(event) => setExploredStatus(event.target.checked)}
                />
                <label htmlFor="explore">Mark as Explored</label>
                <br />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <br />
                <button type="submit">Add Location</button>
            </form>
        </div>
    )
}

export default LocationForm;