import '../styles/main.scss';
import 'bootstrap';
import firebase from 'firebase';
import auth from './components/Auth/auth';
import authData from './helpers/data/authData';
import myNavbar from './components/myNav/myNav';
import apiKeys from './helpers/apiKeys.json';
// import singleBoard from './components/singleBoards/singleBoard';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
  // singleBoard.showBoards();
};

init();
