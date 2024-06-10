import { create } from "zustand";
import { CreateTokenSlice, tokenSlice } from "./tokenSlice";

export const useTokenStore = create<tokenSlice>()(
  (...a) => ({
    ...CreateTokenSlice(...a),
  })
  // {
  //   name: "all-store",
  //   partialize: (state) => ({
  //     token: state.token,
  //     isAuthenticated: state.isAuthenticated,
  //   }),
  // }
);
