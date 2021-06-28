export const USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";

export const registerSuccessfulLogin = (username, password) => {
  sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
};

export const isUserLoggedIn = () => {
  let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  if (user === null) {
    return false;
  }
  return true;
};
