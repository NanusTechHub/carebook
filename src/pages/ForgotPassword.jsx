import React from 'react'

function ForgotPassword() {
  return (
    <form action="" className="form">
      <h1>Reset your password</h1>
      <label className="field">
        <input type="email" required value={""} />
        <button className='btn'>Send reset link</button>
      </label>
    </form>
  )
}

export default ForgotPassword