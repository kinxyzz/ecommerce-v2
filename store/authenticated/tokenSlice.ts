import { StateCreator } from "zustand";

export interface tokenSlice {
  token: string;
  setToken: (token: string) => void;
  refreshTokenInProgress: boolean;
  setRefreshTokenInProgress: (inProgress: boolean) => void;
}

export const CreateTokenSlice: StateCreator<tokenSlice, [], [], tokenSlice> = (
  set
) => ({
  token: "",
  setToken: (token) => set({ token }),
  refreshTokenInProgress: false,
  setRefreshTokenInProgress: (inProgress) =>
    set({ refreshTokenInProgress: inProgress }),
});
