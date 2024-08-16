import React from 'react'

const Login = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useStae('')

  return (
    <form action="" className="login" onSubmit>
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