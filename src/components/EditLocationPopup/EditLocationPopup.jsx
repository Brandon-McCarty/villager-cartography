import './EditLocationPopup.css'
import EditLocationForm from '../EditLocationForm/EditLocationForm';
// Material UI
import { Button, Box } from '@material-ui/core';

function EditLocationPopup ({locationDetailsTrigger, setLocationDetailsTrigger}) {
    return (locationDetailsTrigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <Button
          variant="contained"
          className="close-button"
          onClick={() => setLocationDetailsTrigger(false)}
          style={{
            backgroundColor: "#d43c2c",
            padding: "9px 18px",

            fontSize: "14px",
            fontColor: "white"
          }}
        >Close</Button>
        <Box m={2}>
          <EditLocationForm
            setLocationDetailsTrigger={setLocationDetailsTrigger}
          />
        </Box>
      </div>
    </div>
  ) : '';
    
}

export default EditLocationPopup;