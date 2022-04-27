import {useState} from 'react';
import { useSelector } from 'react-redux';
import './MessageBoard.css';

// Material UI
import { Box } from '@material-ui/core'

function MessageBoard() {

    const messages = useSelector(store => store.messagesReducer)

    return (
        <Box
            pt={2}
        >
            <ul>
                {messages.map(message => {
                    return (
                        <li key={message.id}>{message.date} {message.time} {message.username}: {message.message}</li>
                    )
                })}
            </ul>

            <form>
                <Box
                    pt={1}
                    pb={1}
                >
                    <TextField
                        type="text"
                        id='outlined-basic'
                        label='Location Name'
                        variant='outlined'
                        value={}
                        onChange={(event) => handleChange(event, 'location_name')}
                    />
                </Box>
            </form>
        </Box>
    )
}

export default MessageBoard