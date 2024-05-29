import React from "react";
import "./Login.css";

function Login() {
  render(
    <main className="App-body">
      <p>Login to access the full dashboard</p>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
      <button>OK</button>
    </main>
  );
}

export default Login;