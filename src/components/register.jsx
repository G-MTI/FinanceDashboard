import {useState} from "react";
import {registerUser} from "../utili/api";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    

    const handleSubmit = async (x) => {
        x.preventDefault();

        if (!email) {
            alert("Email is required");
            return;
        };

        if (!password) {
            alert("Password is required");
            return;
        };

        const isValid = /\S+@\S+\.\S/.test(email);

        if (!isValid) {
            alert("Invalid email format");
            return
        };

        const confirmPassword = document.getElementById("confirmPassword").value;
            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return
            };

        try {
            await registerUser(email, password);
            alert("User created");
            window.location.href = "/";
        }   catch (err) {
            alert(err.message);
            return
        };
    };


    return (
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-wrap gap-8 justify-center" >
                <input
                    className="border-1 border-gray-300 p-4 rounded-3xl"
                    type= "text"
                    placeholder="Email"
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
                    onClick = {() => setShowPassword(!showPassword)} 
                    type="button"
                    >
                        {showPassword ? <EyeOff /> : <Eye />}
                    </button>

                </div>
                <div className="flex border-1 border-gray-300 p-4 rounded-3xl">
                    <input
                        id="confirmPassword"
                        type = {showPassword2 ? "text" : "password"}
                        placeholder="Confirm password"
                    />
                    <button
                    className="flex items-center"
                    type ="button"
                    onClick = {() => setShowPassword2(!showPassword2)} 
                    >
                        {showPassword2 ? <EyeOff /> : <Eye />}
                    </button>
                </div>
            
            </div>
            
            <button 
                type="submit" 
                className="bg-[var(--button)] hover:bg-[var(--hover)] cursor-pointer p-4 rounded-3xl text-white font-bold"
            >
                Register
            </button>
        </form>
    );
};

export default Register;




