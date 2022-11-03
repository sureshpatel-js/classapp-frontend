import { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate, Link, useParams } from "react-router-dom";
import { saveUserData } from "../../redux/user/userActions";
import axios from "axios";
import "./Otp.css"
const Otp = () => {
    let { email } = useParams();
    let navigate = useNavigate();
    const [state, setState] = useState({
        otp: "",
        password: "",
        email
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState(state => ({
            ...state,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        axios.post('http://localhost:5000/auth/setpassword', state)
            .then(function (response) {
                console.log(response.data.data);
                navigate("/user/login");
            })
            .catch(function (error) {
                console.log(error);
            });

        e.preventDefault();
    }

    return (
        <div className="otpContainer" >
            <input
                type="text"
                name="otp"
                placeholder="OTP"
                onChange={handleInputChange}
                value={state.otp}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
                value={state.password}
            />
            <button onClick={handleSubmit} >Submit</button>
        </div>
    )
}

export default Otp;