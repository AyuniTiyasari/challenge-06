import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Login from './pages/Login'
import Register from './pages/Register'
import { GoogleOAuthProvider  } from '@react-oauth/google'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
    <Routes>
      <Route path='*' element={<Home />}/>
      <Route path='/detailMovie/:id' element={<Detail />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
    </GoogleOAuthProvider>
    </Provider>
  )
}

export default App