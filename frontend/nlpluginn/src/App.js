import Welcome from "./components/Welcome";
import Subscribe from "./components/Subscribe";
import Plugin from "./components/Plugin";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserManager from "./components/UserManager";
import UpdateUser from "./components/UpdateUser";
import SignUp1 from "./components/SignUp1";
import Login1 from "./components/Login1";
import UserManager1 from "./components/UserManager1";
import Login from "./components/Login";
import { UserProvider } from "./components/UseContext";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  return (
    <div>
       <UserProvider user={currentUser}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route element={<Welcome />} path="/" />
          <Route element={<Plugin />} path="plugin" />
          <Route element={<Subscribe />} path="subscribe" />
          <Route element={<UserManager />} path="usermanager" />
          <Route element={<UpdateUser />} path="updateUser" />
          <Route element={<SignUp1 />} path="signup" />
          <Route element={<Login1 />} path="login" />
          {/* <Route element={<Login/>} path="logindemo" /> */}
          <Route element={<UserManager1 />} path="userdetails" />
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
