import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css"
const Signup = () => {
    let navigate = useNavigate();
    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        contact_num: "",
        email: "",
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        console.log(state)
        axios.post('http://localhost:5000/user/adminSignUp', state)
            .then(function (response) {
                console.log(response.data.user);
                const { email } = response.data.user;
                navigate(`/user/setpassword/${email}`);
            })
            .catch(function (error) {
                console.log(error);
            });

        e.preventDefault();
    }

    return (
        <div className="signupContainer" >
            <input
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={handleInputChange}
                value={state.first_name}
            />
            <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={handleInputChange}
                value={state.last_name}
            />
            <input
                type="text"
                name="contact_num"
                placeholder="Contact Number"
                onChange={handleInputChange}
                value={state.contact_num}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                value={state.email}
            />

            <button onClick={handleSubmit} >Submit</button>
            <Link to={"/user/login"} > login </Link>
        </div>
    )
}

export default Signup;