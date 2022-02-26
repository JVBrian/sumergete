import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const ErrMsg = (msg) => {
  return <div className="errMsg">{msg}</div>;
};

export const SuccessMsg = (msg) => {
  return <div className="successMsg">{msg}</div>;
};
