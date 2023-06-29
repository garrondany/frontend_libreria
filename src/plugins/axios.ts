import Axios, { type AxiosInstance } from "axios";
import { useAuthStore } from "@/stores/index";

const axios: AxiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_ENDPOINT
  // headers: { 
  //   "Content-type": "application/json",
  //   'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY4Nzk4ODU4MiwiZXhwIjoxNjg3OTg4NzYyfQ.827IgC7RBi-HME44C-S_T7xRvfcLA1oCSK2kkF3Dv2Y"
  //  } deshabilitamos

});

axios.interceptors.request.use(config => {
  const authStore = useAuthStore();
  if(config.headers) {
    config.headers["Content-type"] = "application/json";
    config.headers["Authorization"] = "Bearer " + authStore.token;
  }
  return config;
});

export default axios;