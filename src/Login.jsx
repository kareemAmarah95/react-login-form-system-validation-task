import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import logo from "./assets/logo-1.svg";
const Login = () => {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("12345678");
  const uid = import.meta.env.VITE_UID;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        ` https://one-hand/login?uid=${uid}`,
        {
          email,
          password,
        },
        {
          headers: {
            "X-secret-key": "OH2024",
          },
          transformResponse: [
            (data) => {
              console.log("Raw response data:", data);
              return JSON.parse(data);
            },
          ],
        }
      );

      console.log("Response:", response.data);
      if (response.data.token) {
        Cookies.set("token", response.data.token);
        navigate("/home");
      } else {
        throw new Error("Invalid login response");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="imgSize">
          <img src={logo} alt="" />
        </div>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
