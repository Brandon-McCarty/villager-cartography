import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../Header/Header';

// Material UI
import { Paper, Box } from '@material-ui/core'

function Profile() {

  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  const worlds = useSelector(store => store.worldsReducer)

  useEffect(() => {
    // dispatch to get all worlds to display on the DOM
    dispatch({ type: 'GET_WORLDS' });
  }, []);

  return (
    <div>
      <Header
        pageTitle={`${user.username}'s Profile`}
      />
      <Box
        align='center'
      >
        <h1>{user.username}</h1>
        <h2>Worlds</h2>
      </Box>
      <div>
        {worlds.map(world => {
          return (
            <Box
              p={1}
              style={{
                textDecoration: 'none'
              }}
              key={world.id}
              component={Link}
              to={`/locations/${world.id}`}
            >
              <Paper
                align='center'
                style={{
                  backgroundColor: "#C28340",
                  border: "1px solid black",
                  minHeight: '5vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
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