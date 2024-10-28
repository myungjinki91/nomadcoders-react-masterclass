import { atom, AtomEffect } from "recoil";

export enum Category {
  Want = "want",
  Visited = "visited",
  Like = "like",
}

export interface ICountry {
  id: number;
  name: string;
  category: Category;
}

// Define proper types for the local storage effect
const localStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      try {
        setSelf(JSON.parse(savedValue));
      } catch (error) {
        console.error(
          `Error parsing localStorage value for key "${key}":`,
          error
        );
        localStorage.removeItem(key); // Clean up invalid data
      }
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        try {
          localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
          console.error(
            `Error storing value in localStorage for key "${key}":`,
            error
          );
        }
      }
    });
  };

export const countriesState = atom<ICountry[]>({
  key: "countries",
  default: [],
  effects: [localStorageEffect<ICountry[]>("countries")],
});
