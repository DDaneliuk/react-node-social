import React from "react";
import {Routes, Route} from "react-router-dom";
import MessagePageContainer from "./view/message-page/MessagePageContainer";
import UsersPageContainer from "./view/users-page/UsersPageContainer";
import './style/main.scss'
import ProfilePageParams from "./view/profile-page/ProfilePageParams";
import NavBarContainer from "./components/navbar/NavBarContainer";
import LoginContainer from "./view/login-page/LoginContainer";
import SignContainer from "./view/sign-page/SignContainer";

function App(props) {
    return (
        <div className="App">
            <NavBarContainer/>
            <Routes>
                <Route path="/profile/:id" exact element={<ProfilePageParams/>}/>
                <Route path="/message" element={<MessagePageContainer/>}/>
                <Route path="/users" element={<UsersPageContainer/>}/>
                <Route path='/login' element={<LoginContainer/>}/>
                <Route path='/signup' element={<SignContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
