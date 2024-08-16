import React, {useState} from 'react'

const Login = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword]= useState('')

  async function register(ev) {
    ev.preventDefault()
    
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'}
    })

    if(response.status === 200) {
      alert('registration successdully')
    } else {
      alert('registration failed')
    }
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
      <button>Register</button>
    </form>
  )
}

export default Login