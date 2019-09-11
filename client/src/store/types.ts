export interface State {
  username: string;
  password: string;
  status: 'login' | 'logout' | null;
}
