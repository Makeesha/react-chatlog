import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';


const ChatLog = ({entries,updateLikes}) => {

    return (
    <div className="chat-log">
        {entries.map((entry) => (
            <ChatEntry 
            sender={entry.sender}
            body = {entry.body}
            timeStamp = {entry.timeStamp} 
            updateLikes ={updateLikes}
            />
        ))}
    </div>  
    );         
};

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired,
};
export default ChatLog;