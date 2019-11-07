import firebase from 'firebase';

import auth from './components/Auth/auth';
import authData from './helpers/data/authData';
import myNavbar from './components/myNav/myNav';
import apiKeys from './helpers/apiKeys.json';
import singleBoards from './components/singleBoards/singleBoard';

import '../styles/main.scss';

const init = () => {
  // console.log(apiKeys.firebaseKeys);
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
  singleBoards.showBoards();
  // machine.buildMachine();
};

init();
