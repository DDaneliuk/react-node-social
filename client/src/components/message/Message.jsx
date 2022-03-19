import React from "react"
import style from './Message.module.scss'

const Message = (props) => {
    return (
        <div className={style.messageContainer}>
            <div>{props.messages.map((m) => (
                <p key={m.id}>{m.messages}</p>
            ))}</div>
            <p>{props.message}</p>
        </div>

    )
}

export default Message;
