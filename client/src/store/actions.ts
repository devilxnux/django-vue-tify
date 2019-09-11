import { ActionTree } from 'vuex/types';
import { State } from './types';
let actions: ActionTree<State, State> = {
  login: async ({ commit, rootState }) => {
    let data = {
      username: rootState.username,
      password: rootState.password,
    };
    let response = await fetch('/api/login', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
};
