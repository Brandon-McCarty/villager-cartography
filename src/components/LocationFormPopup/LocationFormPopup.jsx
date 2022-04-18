import './LocationFormPopup.css'
import LocationForm from '../LocationForm/LocationForm';
// Material UI
import { Button, Box } from '@material-ui/core';

function LocationFormPopup({ trigger, setTrigger }) {
  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <Button
          variant="contained"
          className="close-button"
          onClick={() => setTrigger(false)}
          style={{
            backgroundColor: "#d43c2c",
            padding: "9px 18px",

            fontSize: "14px",
            fontColor: "white"
          }}
        >Close</Button>
        <Box m={2}>
          <LocationForm
            setTrigger={setTrigger}
          />
        </Box>
      </div>
    </div>
  ) : '';
}

export default LocationFormPopup;