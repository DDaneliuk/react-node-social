import React from "react"
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/reducers/message";
import MessagePage from "./MessagePage";


const MessagePageContainer = (props) => {
    const state = props.store.getState()
    const onSendMessHandler = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onTextMessChange = (body) => {
        props.store.dispatch(updateMessageBodyCreator(body))
    }
    return (<MessagePage onSendMessHandler={onSendMessHandler}
                         onTextMessChange={onTextMessChange}
                         newMessageBody={state.messagePage.newMessageBody}
                         dialogs={state.messagePage.dialogs}
                         messages={state.messagePage.messages}
    />)
}

export default MessagePageContainer
