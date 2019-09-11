import { Route } from 'vue-router';

export function protectedRoute(check: (to: Route, from: Route) => boolean) {
  return (to: Route, from: Route, next: Function) => {
    if (check(to, from)) {
      next();
    } else {
      next({ path: '/login' });
    }
  };
}

export function loginRoute() {
  return protectedRoute(() => {
    let password = localStorage.getItem('password');
    return !!password;
  });
}
