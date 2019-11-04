import $ from 'jquery';
import './auth.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import monkeyBut from '../../../assets/images/dpiytaii5nezptwibem4.png';
import utilities from '../../helpers/utilities';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = `
  <button id="google-auth" class="btn btn-light">
    <img id='googleIcon' src=${monkeyBut} />
  </button>`;

  utilities.printToDom('auth', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginButton };
