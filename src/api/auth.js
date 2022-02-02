import { API_HOST, TOKEN } from "../utils/constant";
import jwtDecode from "jwt-decode";

export function signUpApi(user) {
  const url = `${API_HOST}/registration`;
  const userTemp = {
    ...user,
    email: user.email.toLowerCase(),
    birthDate: new Date()
  };
  delete userTemp.confirmPassword;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userTemp)
  };

  return fetch(url, params)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "User Already Registered" };
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}