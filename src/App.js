import { useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import './App.css';
import Home from './components/home/Home';
import Otp from "./components/auth/Otp";
import User from "./components/auth/User";
import SettingContainer from "./components/settings/SettingContainer";
import Institute from "./components/settings/institute/Institute";

function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  useEffect(() => {
    true ? navigate("/home") : navigate("/user/login");
  }, [])
  return (
    <div className="App">
      <Provider store={store} >
        <Routes>
          <Route path="user" element={<User />} >
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="setpassword/:email" element={<Otp />} />
          </Route>
          <Route path="home" element={<Home />} >
            <Route path="settings" element={<SettingContainer />} >
              <Route path="institute" element={<Institute />} >
              </Route>
            </Route>
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
