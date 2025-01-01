import { toast } from "react-toastify";

export const showToast = (message, type = "info") => {
    toast(message, { type, autoClose: 2000});
  };