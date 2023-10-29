const { auth } = require('express-openid-connect');
const express = require('express')
const app = express()


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:5173',
  clientID: 'gRoP4mbU2jCysVZo4f2lB4osWIPjZaTw',
  issuerBaseURL: 'https://dev-tuyl3w0oiwhiky2u.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


