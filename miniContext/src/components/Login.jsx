import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    // handleSubmit = (e) => {
    //     // dhfghh
    // }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
        {" "}
        <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <button >Submit</button>
    </div>
  )
}

export default Login