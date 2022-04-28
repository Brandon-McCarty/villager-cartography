import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './MessageBoard.css';

// Material UI
import { Box, TextField, Button, Paper } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

function MessageBoard({worldId}) {

    const dispatch = useDispatch();

    const messages = useSelector(store => store.messagesReducer)

    const [newMessage, setNewMessage] = useState('');

    const addMessage = () => {
        dispatch({type: 'ADD_MESSAGE', payload: {message: newMessage, world_id: worldId}});
        setNewMessage('');
    }

    return (
        <Box
            pt={2}
        >

        <Paper
            style={{
                backgroundColor: 'lightgray',
                fontSize: '20px',
                fontFamily: 'sans-serif'
            }}
        >
            <ul>
                {messages.map(message => {
                    return (
                        <li key={message.id}> {message.username}: {message.message}</li>
                    )
                })}
            </ul>
            </Paper>
            <form onSubmit={addMessage}>
                <Box
                    pt={1}
                    pb={1}
                    style={{
                            display: 'flex',
                            justifyContent: 'center'
                    }}
                >
                    <TextField
                        type="text"
                        id='outlined-basic'
                        label='Enter Message'
                        variant='outlined'
                        value={newMessage}
                        onChange={(event) => setNewMessage(event.target.value)}
                    />

                    <Button
                        style={{
                            backgroundColor: '#4A6F28',
                            padding: '1px 10px',
                            marginLeft: '8px',
                            
                        }}
                        type="submit"
                    >Send <SendIcon />
                    </Button>
                </Box>


            </form>
        </Box>
    )
}

export default MessageBoard