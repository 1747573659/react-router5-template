import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {login} from '../../action/user'

function LoginPage({isLogin, location, login, loading}) {

  const [name, setName] = useState('')
  const nameChange = (e) => {
    setName(e.target.value)
  }

  if (isLogin) {
    const {from = '/'} = location.state || {}
    return <Redirect to={from}/>
  }
  return (
    <div>
      <h3>LoginPage</h3>
      <input type="text" value={name} onChange={nameChange}></input>
      <button onClick={() => login({name})}>{loading ? 'loading...' : 'login'}</button>
    </div>
  )
}

export default connect(({user}) => ({isLogin: user.isLogin, loading: user.loading}), {login})(LoginPage)