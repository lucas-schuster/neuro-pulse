import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({setToken}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        email,
        password
      });
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token); // <- 🔥 dispara re-render!
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Erro ao fazer login.");
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
      <button type="submit">Entrar</button>
    </form>
  );
}

