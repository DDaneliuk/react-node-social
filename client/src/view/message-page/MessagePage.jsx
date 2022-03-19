import React from "react"
import Dialog from "../../components/dialog/Dialog";
import Message from "../../components/message/Message";
import style from "./MessagePage.module.scss";
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/reducers/message";


const MessagePage = (props) => {
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
            <h1>Messages</h1>
            <div className={style.flexContainer}>
                <Dialog dialogs={props.messagePage.dialogs}/>
                <div className={style.messageContainer}>
                    <Message messages={props.messagePage.messages}/>
                    <div>
                        <form>
                            <textarea
                                rows="3"
                                placeholder="Write something new..."
                                value={messBody}
                                onChange={e => onTextMessChange(e)}
                            />
                            <div className={style.messForm}>
                                <button className={`primaryBtn ${style.primaryBtn}`} onClick={e => onSendMessHandler(e)}>Send Message
                                </button>
                                <p className='hint'>Press button to send your mess</p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MessagePage
