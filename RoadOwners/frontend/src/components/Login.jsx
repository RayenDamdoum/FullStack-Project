import { useState } from "react"
import { loginUser  } from "../api.js"

const Login = () => {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")

  const handleSubmit =async(e) => {
    e.preventDefault()
    try {
      const response = await loginUser ({ email, password })
      console.log("Login successful", response.data)
      localStorage.setItem("token",response.data.token)
      window.location.href="/"
    } catch(error) {
      console.error("Login failed",error)
    }
  }
  return (
    <div className="auth-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login