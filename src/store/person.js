import create from "zustand";
import { persist } from "zustand/middleware";

let personStore = (set) => ({
  persons: [{}],
  addPerson: (newPerson) =>
    set((state) => ({ persons: [...state.persons, newPerson] })),
});

personStore = persist(personStore, { name: "person_storage" });

export const usePersonStore = create(personStore);
