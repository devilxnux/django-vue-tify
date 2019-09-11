import { State } from './types';

export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_LOGOUT = 'SET_LOGOUT';
export const SET_LOGIN = 'SET_LOGIN';
export const CLEAR_STATUS = 'CLEAR_STATUS';

const mutations = {
  [SET_PASSWORD](state: State, password: string) {
    state.password = password;
  },
  [SET_USERNAME](state: State, username: string) {
    state.username = username;
  },
  [SET_LOGOUT](state: State) {
    state.status = 'logout';
  },
  [SET_LOGIN](state: State) {
    state.status = 'login';
  },
  [CLEAR_STATUS](state: State) {
    state.status = null;
  },
};

export default mutations;
