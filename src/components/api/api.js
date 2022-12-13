import axios from "axios";

export const getproject = async () => {
  const url = `${process.env.REACT_APP_MY_API_KEY}/project`;

  const { data } = await axios.get(url);
  return data;
};

export const getskill = async () => {
  const url = `${process.env.REACT_APP_MY_API_KEY}/skills`;

  const { data } = await axios.get(url);
  return data;
};
export const getprofile = async () => {
  const url = `${process.env.REACT_APP_MY_API_KEY}/profile`;

  const { data } = await axios.get(url);
  return data;
};
export const getexperience = async () => {
  const url = `${process.env.REACT_APP_MY_API_KEY}/experience`;

  const { data } = await axios.get(url);
  return data;
};
