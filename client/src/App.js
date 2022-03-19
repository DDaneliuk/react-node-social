import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ProfilePage from "./view/profile-page/ProfilePage";
import MessagePageContainer from "./view/message-page/MessagePageContainer";
import "./App.scss";
import './components/style/main.scss'

function App(props) {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ProfilePage store={props.store}/>}/>
                    <Route path="/message" element={<MessagePageContainer store={props.store}/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
