import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import Login from '../pages/Login'
import User from '../pages/User'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

export default function Routes() {
  return (
    <BrowserRouter>
      <Link to='/'>首页</Link>
      <Link to='/user'>用户</Link>
      <Link to='/login'>登录</Link>

      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' component={Login}></Route>
        <PrivateRoute path="/user" component={User}/>
        {/* <Route path='/user' component={User}></Route> */}
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  )
}
