import React from "react";
import './ChatMessage.css'
import Avatar from "../../assets/avatar";

// user (user | chatgpt)
// message - aonde vair estar o prompt
export const ChatMessage = ({message}) =>{
    return(
    <div className={`chat-message ${message.user === 'gpt'} && "chatgpt"`}>
        <div className="chat-message-center">
            <div className={`avatar ${message.user === 'gpt' && "chapgpt"}`}>
                {message.user === 'gpt' && (<Avatar/>)}
            </div>
            <div classNanem="message">
                {message.message}
            </div>
        </div>
    </div>
    )
}