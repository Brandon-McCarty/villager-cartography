import { useDispatch } from 'react-redux';
import './LocationFormPopup.css'
import LocationForm from '../LocationForm/LocationForm';
import MessageBoard from '../MessageBoard/MessageBoard';

// Material UI
import { Button, Box } from '@material-ui/core';

function LocationFormPopup({
  trigger,
  setTrigger,
  locationFormTrigger,
  setLocationFormTrigger,
  messageTrigger,
  setMessageTrigger,
  worldId
}) {

  const dispatch = useDispatch();

  // Reset all triggers on closing 
  const resetTriggers = () => {
    setTrigger(false);
    setLocationFormTrigger(false);
    setMessageTrigger(false);
    dispatch({ type: 'CLEAR_MESSAGES' });
  }


  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <Button
          variant="contained"
          className="close-button"
          onClick={resetTriggers}
          style={{
            backgroundColor: "#d43c2c",
            padding: "9px 18px",

            fontSize: "14px",
            fontColor: "white"
          }}
        >Close</Button>
        <Box m={2}>

          {locationFormTrigger &&
            <LocationForm
              setTrigger={setTrigger}
              setLocationFormTrigger={setLocationFormTrigger}
            />}
        </Box>
        {messageTrigger &&
          <MessageBoard
            worldId={worldId}
          />
        }


      </div>
    </div>
  ) : '';

}

export default LocationFormPopup;