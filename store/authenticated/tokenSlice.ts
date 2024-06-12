import { StateCreator } from "zustand";

export interface tokenSlice {
  token: string | null;
  setToken: (token: string | null) => void;
  refreshTokenInProgress: boolean;
  setRefreshTokenInProgress: (inProgress: boolean) => void;
  setIsAuthenticated: (inAuth: boolean) => void;
  isAuthenticated: boolean;
}

export const CreateTokenSlice: StateCreator<tokenSlice, [], [], tokenSlice> = (
  set
) => ({
  isAuthenticated: false,
  token: null,

  setIsAuthenticated: (inAuth) => set({ isAuthenticated: inAuth }),
  setToken: (token) => set({ token }),
  refreshTokenInProgress: false,
  setRefreshTokenInProgress: (inProgress) =>
    set({ refreshTokenInProgress: inProgress }),
});
