import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ProfilePage from "./view/profile-page/ProfilePage";
import MessagePage from "./view/message-page/MessagePage";
import "./App.scss";
import './components/style/main.scss'

function App(props) {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route path="/"
                           element={<ProfilePage profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path="/message"
                           element={<MessagePage messagePage={props.state.messagePage} dispatch={props.dispatch}/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
