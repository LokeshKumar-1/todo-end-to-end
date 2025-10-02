import "./index.css"
import {useState} from "react";
import {loginUser, registerUser} from "../../../api/services/auth.service.js";
import {ToastContainer, toast} from "react-toastify";
import {storeToken} from "../../../api/storageService.js";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()

    const [inputMode, setInputMode] = useState("Login")
    const [userInputs, setUserInputs] = useState({
        username: "",
        password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Pressed")

        const postResponse = inputMode === "Login" ? await loginUser(userInputs) : await registerUser(userInputs)
        if (inputMode === "Login") {
            if (postResponse) {
                toast(postResponse?.message || "User Logged In Successfully!")
                storeToken(postResponse.token)
                navigate("/dashboard", {replace: true})
            }
        } else {
            if (postResponse) {
                toast(postResponse?.message || "User Created Successfully!")
                setInputMode("SignUp")
            }
        }

    }

    return (
        <div className="parent-container">
            <form className="form-cont" onSubmit={handleSubmit}>
                <h3>{inputMode}</h3>
                <input type={"text"} placeholder="Username" value={userInputs?.username}
                       onChange={e => setUserInputs(prevState => ({
                           ...prevState,
                           username: e.target.value
                       }))}/>
                <input type={"password"} placeholder="Password" value={userInputs?.password}
                       onChange={e => setUserInputs(prevState => ({
                           ...prevState,
                           password: e.target.value
                       }))}/>

                <button type={"submit"}>Login</button>
                <div className="sign-up-container">
                    <p className="sign-up-text">Don't have an account?</p>
                    <button type={"button"}
                            onClick={() => setInputMode((prevState) => prevState === "Login" ? "SignUp" : "Login")}>{inputMode === "Login" ? "Create Account" : "Login"}</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default Login