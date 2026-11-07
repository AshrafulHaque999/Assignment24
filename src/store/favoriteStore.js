import { create } from "zustand";

const useFavoriteStore = create((set) => ({
  favorites: JSON.parse(
    localStorage.getItem("favorites") || "[]"
  ),

  addFavorite: (user) =>
    set((state) => {
      const favorites = [...state.favorites, user];

      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
      );

      return { favorites };
    }),

  removeFavorite: (id) =>
    set((state) => {
      const favorites = state.favorites.filter(
        (user) => user.id !== id
      );

      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
      );

      return { favorites };
    }),
}));

export default useFavoriteStore;