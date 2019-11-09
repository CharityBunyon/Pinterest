import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import allBoards from '../../components/allBoards/allBoards';

const authDiv = $('#auth');
const logoutNavbar = $('#navbar-button-logout');
const boardsDiv = $('#boards');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // someone is logged in - we should NOT see auth component
      boardsDiv.removeClass('hide');
      logoutNavbar.removeClass('hide');
      authDiv.addClass('hide');
      allBoards.buildAllBoard(user.uid);
    } else {
      // nobody logged in SHOW auth component
      boardsDiv.addClass('hide');
      logoutNavbar.addClass('hide');
      authDiv.removeClass('hide');
    }
  });
};

const getCurrentUid = () => firebase.auth().currentUser.uid;

export default { checkLoginStatus, getCurrentUid };
