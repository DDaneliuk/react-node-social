import {connect} from "react-redux";
import MessagePage from "./MessagePage";
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/reducers/message";

const mapStateToProps = (state) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        newMessageBody: state.messagePage.newMessageBody,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateMessageBodyCreator: (body) => {
            dispatch(updateMessageBodyCreator(body))
        }
    }
}

const MessagePageContainer = connect(mapStateToProps, mapDispatchToProps)(MessagePage)

export default MessagePageContainer
