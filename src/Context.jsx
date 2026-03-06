

import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("Search recipes");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!search.trim()) {
    toast.error("Please enter something");
      return;
    }

    try {
      setLoading(true);
      setMsg("Loading recipes...");

      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );

      if (!res.ok) throw new Error("Failed to fetch recipes");

      const data = await res.json();

      if (data?.data?.recipes?.length > 0) {
        setRecipes(data.data.recipes);
        setMsg("Search Results");
      } else {
        setRecipes([]);
        setMsg("No recipes found");
      }
    } catch (error) {
      console.error(error);
      setMsg("Something went wrong");
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

    const toggleFavourite = (recipe) => {
    setFavourites((prev) => {
      const exists = prev.find((item) => item.id === recipe.id);

      if (exists) {
         
        return prev.filter((item) => item.id !== recipe.id);
        
      } else {
        return [...prev, recipe];
      }
    });
  

   const exists = favourites.find((item) => item.id === recipe.id);

  if (exists) {
    toast.error("Removed from favourites");
  } else {
    toast.success("Added to favourites");
  }
};
  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        recipes,
        favourites,
        loading,
        msg,
        handleSubmit,
        toggleFavourite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;





