import { useState } from "react";
import axios from "axios"
import "./InstituteForm.css"
const InstituteForm = () => {
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
            })
            .catch(function (error) {
                console.log(error);
            });

        e.preventDefault();
    }
    return (
        <div className="instituteForm" >
            <div class="mb-3 inputContainer">
                <input
                    type="name"
                    class="form-control"
                    id="name"
                >
                </ input>
            </div>
            <button onClick={handleSubmit} >Submit</button>
        </div>
    )
}
export default InstituteForm;