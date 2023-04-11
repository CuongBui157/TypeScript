import instance from ".";
import { SigninForm, SignupForm } from "../models";

export const signup = (data: SignupForm) => {
  const uri = "/users/signup";
  return instance.post(uri, data);
};
export const signin = (data: SigninForm) => {
  const uri = "/users/signin";
  return instance.post(uri, data);
};
export const logout = () => {
  const uri = "/users/logout";
  return instance.post(uri);
};
