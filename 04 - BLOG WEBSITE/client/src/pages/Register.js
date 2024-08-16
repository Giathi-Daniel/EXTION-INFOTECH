import React from 'react'

const Login = () => {
  const [username, setUserName] = useState('')
  const
  
  async function register(ev) {
    ev.preventDefault()

    await fetch('https://localhost:4000'), {
      method: 'POST',
      body: JSON.sptrigify({username, password}),
      headers: {'Content-type ':''application/json '}
  }

  return (
    <form action="" className="login" onSubmit={register}>
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