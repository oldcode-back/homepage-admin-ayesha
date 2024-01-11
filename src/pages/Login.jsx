// styled-component imports 
import { useState } from "react";
import Wrapper from "../assets/Wrappers/Login"

// react-icon imports 
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Wrapper>
            <form>
                <div className="form-input">
                    <label htmlFor="username">Username</label>
                    <br />
                    <input type="text" placeholder="enter your username" id="username" />
                </div>

                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <br />

                    <input type={showPassword ? "text" : "password"} placeholder="enter your password" id="password" />
                    <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>

                <div className="btn-div">
                    <button type="submit">
                        Login
                    </button>
                </div>
            </form>
        </Wrapper>
    )
}
export default Login