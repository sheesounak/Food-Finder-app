import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context";

const Details = () => {
  const { id } = useParams();
  const [recipedetails, setRecipedetails] = useState(null);
  const [error, setError] = useState(false);

  const { favourites, toggleFavourite } = useContext(GlobalContext);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        if (!res.ok) throw new Error("API Error");

        const data = await res.json();
        setRecipedetails(data?.data?.recipe);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    fetchDetails();
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 font-semibold">
          Failed to load recipe
        </p>
      </div>
    );
  }

  if (!recipedetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-600">
          Loading recipe...
        </p>
      </div>
    );
  }

  
  const isFavourite = favourites.some(
    (item) => item.id === recipedetails.id
  );

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-indigo-50 shadow-xl rounded-2xl p-6">

        <img
          src={recipedetails.image_url}
          alt={recipedetails.title}
          className="w-full h-96 object-cover rounded-xl"
        />

        <div className="flex flex-col gap-4">
          <span className="text-sm text-indigo-600 font-semibold uppercase">
            {recipedetails.publisher}
          </span>

          <h1 className="text-3xl font-bold text-gray-900">
            {recipedetails.title}
          </h1>

          
          <button
            onClick={() => toggleFavourite(recipedetails)}
            className={`w-fit px-6 py-2 rounded-xl font-semibold transition
              ${
                isFavourite
                  ? "bg-red-500 text-white"
                  : "bg-indigo-600 text-white"
              }`}
          >
            {isFavourite ? "Remove from Favourites " : "Add to Favourites "}
          </button>

          <div>
            <h2 className="text-xl font-semibold mb-3">
              Ingredients
            </h2>

            <ul className="flex flex-wrap gap-3">
              {recipedetails.ingredients?.map((ing, index) => (
                <li
                  key={index}
                  className="bg-white px-4 py-2 rounded-lg shadow-sm"
                >
                  <span className="font-semibold">
                    {ing.quantity || ""} {ing.unit}
                  </span>{" "}
                  {ing.description}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Details;
