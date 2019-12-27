import firebase from 'firebase';
import 'bootstrap';

import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import myNavbar from './components/myNav/myNav';
import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
};

init();
