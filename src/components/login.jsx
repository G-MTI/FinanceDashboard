import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const { login } = useAppContext();

    const handleSubmit = async () => {

        if (!email) {
            alert("Email is required");
            return;
        }

        if (!password) {
            alert("Password is required");
            return;
        }

        const isValid = /\S+@\S+\.\S/.test(email);

        if (!isValid) {
            alert("Invalid email format");
            return
        }

        try {
            await login(email, password);
            navigate("/appLogin");
        }   catch (err) {
            alert(err.message);
  }
};

    return (
        <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-wrap gap-8 justify-center" >
                <input    
                    className="border-1 border-gray-300 p-4 rounded-3xl"
                    placeholder = "Email"
                    onChange = {(e) => setEmail(e.target.value)}
                />
                <div className="flex border-1 border-gray-300 p-4 rounded-3xl">
                    <input
                    
                    type = {showPassword ? "text" : "password"}
                    placeholder = "Password"
                    onChange={(p) => setPassword (p.target.value)}
                    />
                    <button
                    className="flex items-center"
                    type ="button"
                    onClick = {() => setShowPassword(!showPassword)} 
                    >
                        {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                </div>
                
            </div>
            <div className="flex gap-8 justify-center">
                <button className="bg-[var(--button)] hover:bg-[var(--hover)] cursor-pointer p-4 rounded-3xl text-white font-bold" onClick = {handleSubmit}>
                    Login
                </button>

                <Link className="bg-[var(--button)] hover:bg-[var(--hover)] cursor-pointer p-4 rounded-3xl text-white font-bold" to="/Register">Register here</Link>
            </div>
        </div> 
    );

} 
export default Login;