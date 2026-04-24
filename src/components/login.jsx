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
        <div className="flex gap-4">
            <input    
                className="border-1 border-gray-300 p-4 rounded-3xl"
                type = "email" 
                placeholder = "Email"
                onChange = {(e) => setEmail(e.target.value)}
            />
            <input
                className="border-1 border-gray-300 p-4 rounded-3xl"
                type = "password"
                placeholder = "Password"
                onChange={(p) => setPassword (p.target.value)}
            />
            <button className="bg-[var(--button)] hover:bg-[var(--hover)] cursor-pointer p-4 rounded-3xl text-white font-bold" onClick = {handleSubmit}>
                Login
            </button>

            <Link className="bg-[var(--button)] hover:bg-[var(--hover)] cursor-pointer p-4 rounded-3xl text-white font-bold" to="/Register">Register here</Link>

        </div> 
    );

} 
export default Login;