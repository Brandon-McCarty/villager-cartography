import {useDispatch, useSelector} from 'react-redux';
import './WorldFormPopup.css';
import WorldForm from '../WorldForm/WorldForm';

// Material UI
import { Button, Box } from '@material-ui/core';


function WorldFormPopup({ 
  joinCodeTrigger,
  setJoinCodeTrigger, 
  trigger,
  setTrigger,
  formTrigger,
  setFormTrigger,
}) {

  const dispatch = useDispatch();
  const joinCode = useSelector(store => store.joinCodeReducer);

  // Reset all triggers upon closing
  const resetTriggers = () => {
    setTrigger(false);
    setFormTrigger(false);
    setJoinCodeTrigger(false);
    dispatch({type: 'CLEAR_JOIN_CODE'});
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
          }}
        >Close</Button>

        {formTrigger &&
          <WorldForm
            setTrigger={setTrigger}
            setFormTrigger={setFormTrigger}
          />}
        <Box
          pt={4}
        >
        {joinCodeTrigger &&  <p>The join code for this world is: {joinCode.join_code}</p> }
        </Box>
      </div>
    </div>
  ) : '';
}

export default WorldFormPopup;