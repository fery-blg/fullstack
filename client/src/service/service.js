import axios from "axios";
import toast from "react-hot-toast";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND}`,
});
export async function register(username, email, password) {
  try {
    const response = await axiosClient.post("/register", {
      username,
      email,
      password,
    });
    console.log(response);
    toast.success(response.data.message)
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.response.data.message);
 toast.error(error.response.data.message);
    return error;
  }
}
