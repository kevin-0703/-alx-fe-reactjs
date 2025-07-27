import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],

    addRecipe: (newRecipe) =>
        set((state) => ({
            recipes: [...state.recipes, newRecipe],
            filteredRecipes: [...state.recipes, newRecipe].filter((r) =>
                r.title.toLowerCase().includes(get().searchTerm.toLowerCase())
            ),
        })),

    setSearchTerm: (term) => {
        set({ searchTerm: term });
        get().filterRecipes();
    },

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
