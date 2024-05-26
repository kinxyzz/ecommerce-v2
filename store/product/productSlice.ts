import { StateCreator } from "zustand";

export interface productSlice {
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  setProductName: (name: string) => void;
  setProductDescription: (description: string) => void;
  setProductPrice: (price: number) => void;
  setProductImage: (image: string) => void;
  setProductQuantity: (quantity: number) => void;
}

export const CreateTokenSlice: StateCreator<
  productSlice,
  [],
  [],
  productSlice
> = (set) => ({
  name: "",
  description: "",
  price: 0,
  image: "",
  quantity: 0,
  setProductName: (name) => set({ name }),
  setProductDescription: (description) => set({ description }),
  setProductPrice: (price) => set({ price }),
  setProductImage: (image) => set({ image }),
  setProductQuantity: (quantity) => set({ quantity }),
});
