import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
  type: constants.LOGIN,
  value: true
});

export const login = (account, password) => (dispatch) => {
  axios
    .get(`/api/login.json?account=${account}&password=${password}`)
    .then((res) => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin());
      } else {
        console.log('登陸失敗');
      }
    });
};

export const logout = () => ({
  type: constants.LOGOUT,
  value: false
});
