import { axiosInstance } from "@/config/axios";
import { API_ENUMS } from "@/enums/apiEnums";

export const SigninWithGithub = async () => {
  try {
    const response = await axiosInstance(`${API_ENUMS.AUTH}/github`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const AuthApiRequest = {
  SigninWithGithub,
};
