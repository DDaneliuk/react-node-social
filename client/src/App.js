import React from "react";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import MessagePageContainer from "./view/message-page/MessagePageContainer";
import UsersPageContainer from "./view/users-page/UsersPageContainer";
import './style/main.scss'
import ProfilePageParams from "./view/profile-page/ProfilePageParams";

function App(props) {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="/profile/:id" element={<ProfilePageParams/>}/>
                <Route path="/message" element={<MessagePageContainer/>}/>
                <Route path="/users" element={<UsersPageContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
