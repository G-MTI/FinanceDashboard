import {useState} from "react";
import {registerUser, loginUser} from "../utili/api";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (x) => {
        x.preventDefault();


        try {
            await registerUser(email, password);
            alert("User created");
            window.location.href = "/";
        }   catch (err) {
            alert(err.message);
        }

    };


    return (
        <form onSubmit={handleSubmit} className="flex gap-4">
            <input
                className="border-1 border-gray-300 p-4 rounded-3xl"
                type ="email"
                placeholder="Email"
                onChange = {(e) => setEmail(e.target.value)}
            />
            <input
                className="border-1 border-gray-300 p-4 rounded-3xl"
                type = "password"
                placeholder="Password"
                onChange = {(p) => setPassword(p.target.value)}
            />
            <button type="submit" className="bg-[var(--button)] hover:bg-[var(--hover)] cursor-pointer p-4 rounded-3xl text-white font-bold">
                Register
            </button>
        </form>
    );
};

export default Register;