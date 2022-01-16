const url = "http://localhost:3002/api/v1/";

const signup = (username, email, password) => {
  return fetch(`${url}user/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
};

const login = (email, password) => {
  return fetch(`${url}auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

const fetchUserByToken = (token) => {
  return fetch(`${url}user/token`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  signup,
  login,
  fetchUserByToken,
  logout,
};

export default authService;
