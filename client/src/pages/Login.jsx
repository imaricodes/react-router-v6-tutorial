import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <label className="flex flex-row gap-4"> Name
        <input className="border" value={name} onChange={(e) => {setName(e.target.value)}} type="text" placeholder=" Name" /></label> <br />

        <label className="flex flex-row gap-4"> Email
        <input className="border" value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" /></label> <br />

        <label className="flex flex-row gap-4">Password
        <input className="border" value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="******" /> </label> <br />

        <button className="btn" type="submit">Login</button>

      </form>
    </div>
  );
};

export default Login;
