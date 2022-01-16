import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ProfilePage from "./components/profilePage/ProfilePage";
import "./App.scss";

function App(props) {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path=""
            element={
              <ProfilePage
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
