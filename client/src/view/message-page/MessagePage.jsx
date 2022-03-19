import React from "react"
import Dialog from "../../components/dialog/Dialog";
import Message from "../../components/message/Message";
import style from "./MessagePage.module.scss";


const MessagePage = (props) => {
    const messBody = props.newMessageBody

    const onSendMessHandler = (e) => {
        e.preventDefault()
        props.onSendMessHandler()
    }
    const onTextMessChange = (e) => {
        const body = e.target.value
        props.onTextMessChange(body)
    }
    return (
        <div>
            <h1>Messages</h1>
            <div className={style.flexContainer}>
                <Dialog dialogs={props.dialogs}/>
                <div className={style.messageContainer}>
                    <Message messages={props.messages}/>
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
