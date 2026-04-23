import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import {loginUser} from "../utili/api";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { login } = useAppContext();

    const handleSubmit = async () => {
  try {
    await login(email, password);
    navigate("/app");
  } catch (err) {
    console.error(err.message);
  }
};

    return (
        <div>
            <input
                type = "email" 
                placeholder = "Email"
                onChange = {(e) => setEmail(e.target.value)}
            />
            <input
                type = "password"
                placeholder = "Password"
                onChange={(p) => setPassword (p.target.value)}
            />
            <button onClick = {handleSubmit}>
                Login
            </button>

            <Link to="/Register">Register here</Link>

        </div> 
    );

} 
export default Login;