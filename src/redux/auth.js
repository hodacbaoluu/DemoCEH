import { userService } from "../../service/service";
import { SET_INFO } from "../constant/user";
import {
  message,
} from "antd";
export const  loginAction = (formData, callback) => {
  return (dispatch) => {
    userService
      .login(formData)
      .then((res) => {
        console.log(res);

        localStorage.setItem("USER", JSON.stringify(res.data.content));
        callback();
      })
      .catch((err) => {
        console.log(err.response.data.message);
        message.error(err.response.data.message);
      });
  };
};  

export const setInfoAction  = (payload) => ({
  type: SET_INFO,
  payload
})