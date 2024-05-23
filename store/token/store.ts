import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CreateTokenSlice, tokenSlice } from "./tokenSlice";

export const useTokenStore = create<tokenSlice>()(
  persist(
    (...a) => ({
      ...CreateTokenSlice(...a),
    }),
    {
      name: "all-store",
      partialize: (state) => ({ token: state.token }),
    }
  )
);
