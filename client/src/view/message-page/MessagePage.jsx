import React from "react"
import Dialog from "../../components/dialog/Dialog";
import Message from "../../components/message/Message";
import style from "../../components/posts/Posts.module.scss";
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/reducers/message";


const MessagePage = (props) => {
    const dialogsElem = props.messagePage.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)
    const messagesElem = props.messagePage.messages.map(m => <Message id={m.id} message={m.messages}/>)
    const messBody = props.messagePage.newMessageBody

    const onSendMessHandler = (e) => {
        e.preventDefault()
        props.dispatch(sendMessageCreator())
    }
    const onTextMessChange = (e) => {
        const body = e.target.value
        props.dispatch(updateMessageBodyCreator(body))
    }
    return (
        <div>
            <h1>Message</h1>
            <div>{dialogsElem}</div>
            <div>{messagesElem}</div>
            <div>
                <form>
                <textarea
                    rows="3"
                    placeholder="Write something new..."
                    value={messBody}
                    onChange={e => onTextMessChange(e)}
                />
                    <div className={style.messageBtn}>
                        <p className={style.hint}>Press button to send your mess</p>
                        <button className={style.primaryBtn} onClick={e => onSendMessHandler(e)}>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MessagePage
