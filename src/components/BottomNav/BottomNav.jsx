import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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

    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = useSelector((store) => store.user);
    const [value, setValue] = useState(0);


    const goBack = () => {
        history.goBack()
    }


    return (

        // <div className="nav">
        //   <Link to="/home">
        //     <h2 className="nav-title">Prime Solo Project</h2>
        //   </Link>
        //   <div>
        //     {/* If no user is logged in, show these links */}
        //     {!user.id && (
        //       // If there's no user, show login/registration links
        //       <Link className="navLink" to="/login">
        //         Login / Register
        //       </Link>
        //     )}

        //     {/* If a user is logged in, show these links */}
        //     {user.id && (
        //       <>
        //         <Link className="navLink" to="/user">
        //           Home
        //         </Link>

        //         <Link className="navLink" to="/info">
        //           Info Page
        //         </Link>

        //         <LogOutButton className="navLink" />
        //       </>
        //     )}

        //     <Link className="navLink" to="/about">
        //       About
        //     </Link>
        //   </div>
        // </div>




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
                    onChange={(event, newValue) => setValue(newValue)}
                >
                    <BottomNavigationAction
                        label='Back'
                        icon={<ArrowBackIcon />}
                        onClick={goBack}
                    />

                    <Link to='/profile'>
                        <BottomNavigationAction
                            label='Profile'
                            icon={<AccountBoxIcon />} />
                    </Link>

                    <Link to='/worlds'>
                        <BottomNavigationAction
                            label='Worlds'
                            icon={<PublicIcon />} />
                    </Link>

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