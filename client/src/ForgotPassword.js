import {useState} from 'react'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const handleForgotPassword = async (e) => {
      e.preventDefault()
      let req = await fetch('http://localhost:3100/forgot_password', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: email})
      })
      if (req.ok) {
        let res = await req.json()
        let securityQuestion = window.confirm("Is it really u tho? Say 'yes' if it is you. Don't lie")
        if (securityQuestion === 'yes') {
          alert(`Ok cool. Your password is: ${res.password}`)
        }
        else {
          alert("Ok quit playing please.")
        }
      }
    }
    return (
        <div>
      <h2>Forgot your password?</h2>
      <p>
        Fill out the form below and complete the security questions
        to recover your account!
      </p>
      <form onSubmit={handleForgotPassword}>
        <input type="email" placeholder='Enter your email' onChange={(e) => { setEmail(e.target.value) }}/>
        <input type="submit" />
      </form>
        </div>
    )
}

export default ForgotPassword