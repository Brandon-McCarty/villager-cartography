import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { BottomNavigationAction } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PublicIcon from '@material-ui/icons/Public';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor: "#C28340",
        position: 'fixed',
        bottom: 0
    }
})

function BottomNav() {

    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = useSelector((store) => store.user);
    const [value, setValue] = useState(0);

    const goBack = () => {
        history.goBack()
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (

        <div>

            {/* If no user is logged in, show these links */}
            {!user.id && (
                // If there's no user, show login/registration links
                <Link className="navLink" to="/login">
                    Login / Register
                </Link>
            )}

            {user.id &&
                <BottomNavigation
                    className={classes.root}
                    showLabel
                    value={value}
                    onChange={handleChange}
                >
                    
                    <BottomNavigationAction
                        label='Back'
                        icon={<ArrowBackIcon />}
                        onClick={goBack}
                    />

                    <BottomNavigationAction
                        component={Link}
                        to='/profile'
                        label='Profile'
                        icon={<AccountBoxIcon />}
                    />

                    <BottomNavigationAction
                        component={Link}
                        to='/worlds'
                        label='Worlds'
                        icon={<PublicIcon />}
                    />


                    <BottomNavigationAction
                        label='Logout'
                        icon={<ExitToAppIcon />}
                        onClick={() => dispatch({ type: 'LOGOUT' })}
                    />

                </BottomNavigation>}
        </div>
    )
}

export default BottomNav;