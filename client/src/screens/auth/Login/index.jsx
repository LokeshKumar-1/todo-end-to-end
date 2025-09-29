import "./index.css"
import {useState} from "react";

const Login = () => {

    const [inputMode, setInputMode] = useState("Login")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Pressed")
    }

    return (
        <div className="parent-container">
            <form className="form-cont" onSubmit={handleSubmit}>
                <h3>{inputMode}</h3>
                <input type={"text"} placeholder="Username"/>
                <input type={"password"} placeholder="Password"/>

                <button type={"submit"}>Login</button>
                <div className="sign-up-container">
                    <p className="sign-up-text">Don't have an account?</p>
                    <button type={"button"}
                            onClick={() => setInputMode((prevState) => prevState === "Login" ? "SignUp" : "Login")}>{inputMode === "Login" ? "Create Account" : "Login"}</button>
                </div>
            </form>
        </div>
    )
}

export default Login