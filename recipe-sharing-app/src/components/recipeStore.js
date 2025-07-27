import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
    recipes: [],
    favorites: [],
    recommendations: [],

    addRecipe: (newRecipe) => {
        const state = get();
        const updatedRecipes = [...state.recipes, newRecipe];
        return set({
            recipes: updatedRecipes,
            filteredRecipes: updatedRecipes.filter((r) =>
                r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            ),
        });
    },

    // Favorites
    addFavorite: (recipeId) =>
        set((state) => ({
            favorites: [...new Set([...state.favorites, recipeId])],
        })),

    removeFavorite: (recipeId) =>
        set((state) => ({
            favorites: state.favorites.filter((id) => id !== recipeId),
        })),

    // Recommendations (mocked)
    generateRecommendations: () => {
        const { recipes, favorites } = get();
        const recommended = recipes.filter(
            (recipe) =>
                favorites.includes(recipe.id) && Math.random() > 0.5 // mock randomness
        );
        set({ recommendations: recommended });
    },

    searchTerm: '',
    setSearchTerm: (term) => {
        set({ searchTerm: term });
        get().filterRecipes();
    },

    filteredRecipes: [],
    filterRecipes: () =>
        set((state) => ({
            filteredRecipes: state.recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            ),
        })),

    deleteRecipe: (id) =>
        set((state) => {
            const updated = state.recipes.filter((r) => r.id !== id);
            return {
                recipes: updated,
                filteredRecipes: updated.filter((r) =>
                    r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
                favorites: state.favorites.filter((fid) => fid !== id),
            };
        }),

    updateRecipe: (updatedRecipe) =>
        set((state) => {
            const updated = state.recipes.map((r) =>
                r.id === updatedRecipe.id ? updatedRecipe : r
            );
            return {
                recipes: updated,
                filteredRecipes: updated.filter((r) =>
                    r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
            };
        }),
}));

export default useRecipeStore;
