import React, {useContext, useState} from 'react'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(true)
  const {setUserInfo} = useContext(UserContext)

  async function login(ev) {
    ev.preventDefault()
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    })

    if(response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo)
        setRedirect(true)
      })
    } else {
      alert('login failed')
    }

    if (redirect) {
      return <Navigate to={'/'} />
    }
  }

  return (
    <form action="" className="login" onSubmit={login}>
      <h1>Login</h1>
      <input type="text" 
      placeholder="username"
      value={username}
      onChange={ev => setUserName(ev.target.value)} 
      />
      <input type="password" 
      placeholder="password"
      value={password}
      onChange={ev => setUserName(ev.target.value)} 
       />
      <button>Login</button>
    </form>
  )
}

export default Login