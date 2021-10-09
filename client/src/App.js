import React from "react";
import NavBar from "./components/navbar/NavBar"
import ProfilePage from "./components/profilePage/ProfilePage";
import './App.scss';

function App(){
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //   .then((res) => res.json())
  //   .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <ProfilePage />
      {/* <p>{!data ? "Loading..." : data}</p> */}
    </div>
  )
}


export default App;
