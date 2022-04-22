import './WorldFormPopup.css'
import WorldForm from '../WorldForm/WorldForm';
// Material UI
import { Button } from '@material-ui/core';

function WorldFormPopup({ trigger, setTrigger }) {
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
          }}
        >Close</Button>
        <WorldForm
          setTrigger={setTrigger}
        />
      </div>
    </div>
  ) : '';
}

export default WorldFormPopup;