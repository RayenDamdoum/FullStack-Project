import { useState } from "react"
import { registerUser  } from "../api.js"

const Register= ()=> {
  const [email,setEmail]=useState("")
  const [password, setPassword] =useState("")

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const response = await registerUser({ email, password })
      console.log("Registration successful",response.data)
      window.location.href = "/login"
    } catch (error) {
      console.error("Registration failed",error)
    }
  }

  return (
    <div className="auth-page">
      <h2>Register</h2>
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
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register