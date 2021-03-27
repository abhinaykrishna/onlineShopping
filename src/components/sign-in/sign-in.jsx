import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Already have an account ?</h2>
      <span>Sign In</span>
      <form className="ui large form" onSubmit={handleSubmit}>
        <div className="two field">
          <label>First Name</label>
          <input
            type="email"
            placeholder="First Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="two field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Last Name"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="ui submit button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
