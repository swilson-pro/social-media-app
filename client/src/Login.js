import store from "./store"
import {useRef} from 'react'

const Login = () => {
    const form = useRef()


const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(form.current)
    let req = await fetch('http://localhost:3100/login', {
      method: 'POST',
      body: data
    })

    if (req.ok) {
        let res = await req.json()
      console.log('User', res)
      store.dispatch({type: 'user/login', user: res})
      alert('You have logged in')
    } else {
      alert('Invalid email/password')
    }
  }
    return (
        <div>
            <h2>Log in</h2>
      <form onSubmit={handleSubmit} ref={form}>
        <input name="email" type="email" placeholder='Email' /><br />
        <input name="password" type="password" placeholder='Password' /><br />
        <input type="submit" />
      </form>
        </div>

    )

    
}

export default Login