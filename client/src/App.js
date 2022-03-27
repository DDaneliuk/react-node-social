import React from "react";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ProfilePage from "./view/profile-page/ProfilePage";
import MessagePageContainer from "./view/message-page/MessagePageContainer";
import UsersPageContainer from "./view/users-page/UsersPageContainer";
import './style/main.scss'

function App(props) {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element={<ProfilePage/>}/>
                <Route path="/message" element={<MessagePageContainer/>}/>
                <Route path="/users" element={<UsersPageContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
