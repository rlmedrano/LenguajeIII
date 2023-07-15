import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider, useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';


const domain = 'dev-rei6goeabfncp82j.us.auth0.com';
const clientId = 'UOeTDBiCn0KxC2yp1wjlr5zao9LXUQRI';
const audience = 'HB68hhmokWHKOe2C3WF0TozrR-1U7VvSktFEQbWgAo3iw3YedVcPQF05QRIQyxDa';

const AuthenticatedApp = () => {
  const { isAuthenticated, logout, user } = useAuth0();

  return (
    <div>
      <span>Hi, {user.name} <img width={50} height={50} src={user.picture} alt="" /></span>
      <div>Logged: {String(isAuthenticated)}</div>
      <div>Verified: {String(user.email_verified)}</div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const AuthenticatedRoute = withAuthenticationRequired(AuthenticatedApp);

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin + process.env.PUBLIC_URL + '/'}
      audience={audience}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/profile' element={<AuthenticatedRoute />} />
          <Route path='/recetas' element={<Services />} />
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;
