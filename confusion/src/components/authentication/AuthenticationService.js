export const USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";
export const CURRENT_BUSINESS_SESSION_ATTRIBUTE_BUSINESS = "userBusiness";

export const registerSuccessfulLogin = (username, business) => {
  sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
  sessionStorage.setItem(CURRENT_BUSINESS_SESSION_ATTRIBUTE_BUSINESS, business);
};

export const isUserLoggedIn = () => {
  const user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  if (user === null) {
    return false;
  }
  return true;
};
export const isUserLoggedInBusiness = () => {
  const business = sessionStorage.getItem(
    CURRENT_BUSINESS_SESSION_ATTRIBUTE_BUSINESS
  );
  if (business === null) {
    return "";
  }
  return business;
};

export const logout = () => {
  sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
};
