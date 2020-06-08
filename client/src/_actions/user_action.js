import Axios from "axios";
import { LOGIN_USER } from "./types";
import { USER_SERVER } from '../components/Config';

export function loginUser(dataToSubmit) {
  const request = Axios.post(`${USER_SERVER}/login`, dataToSubmit)
      .then(response => response.data);

  return {
      type: LOGIN_USER,
      payload: request
  }
}