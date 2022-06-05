import create from "zustand";

let loremStore = (set) => ({
  loremIpsuns: [],
  addLoremIpsun: (li) =>
    set((state) => ({ loremIpsuns: [...state.loremIpsuns, li] })),
});

export const useLoremStore = create(loremStore);
