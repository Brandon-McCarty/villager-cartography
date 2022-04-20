import {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { BottomNavigationAction } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PublicIcon from '@material-ui/icons/Public';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#C28340"
    }
})

function BottomNav() {

    const classes = useStyles();

    const [value, setValue] = useState(0);



  return (
    <div>
        <BottomNavigation
            className={classes.root}
            showLabels
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
        >
            <BottomNavigationAction label='Back' icon={<ArrowBackIcon/>} />
            <BottomNavigationAction label='Profile' icon={<AccountBoxIcon/>} />
            <BottomNavigationAction label='Worlds' icon={<PublicIcon/>} />
            <BottomNavigationAction label='Logout' icon={<ExitToAppIcon/>} />
        </BottomNavigation>
    </div>
  )
}

export default BottomNav;