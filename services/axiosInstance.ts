import { useTokenStore } from "@/store/authenticated/store";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5500/api",
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = useTokenStore.getState().token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const { refreshTokenInProgress, setRefreshTokenInProgress, setToken } =
        useTokenStore.getState();

      if (!refreshTokenInProgress) {
        setRefreshTokenInProgress(true);

        try {
          const response = await axios.get(
            "http://localhost:5500/api/user/token",
            { withCredentials: true }
          );

          const newAccessToken = response.data.data.token;
          setToken(newAccessToken);
          setRefreshTokenInProgress(false);

          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          setRefreshTokenInProgress(false);
          return Promise.reject(refreshError);
        }
      }

      return new Promise((resolve) => {
        const unsubscribe = useTokenStore.subscribe((state) => {
          if (!state.refreshTokenInProgress) {
            unsubscribe();
            originalRequest.headers["Authorization"] = `Bearer ${state.token}`;
            resolve(api(originalRequest));
          }
        });
      });
    }
    return Promise.reject(error);
  }
);

export default api;
