import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

// Material UI
import { Paper, Box } from '@material-ui/core'

function Profile() {

  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  const worlds = useSelector(store => store.profileReducer)

  useEffect(() => {
    // dispatch to get all worlds for current user to display on the DOM
    dispatch({ type: 'GET_USER_WORLDS' });
  }, []);

  return (
    <div>
      <Header
        pageTitle={`${user.username}'s Worlds Owned`}
      />

      <div>
        {worlds.map(world => {
          return (
            <Box
              p={1}
              key={world.id}
            >

              <Paper
                align='center'
                component={Link}
                to={`/locations/${world.id}`}
                style={{
                  backgroundColor: "#C28340",
                  border: "1px solid black",
                  minHeight: '5vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >{world.world_name}
              </Paper>

            </Box>
          )
        })}
      </div>
    </div>
  )
}

export default Profile;