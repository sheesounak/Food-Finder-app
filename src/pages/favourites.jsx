// import { useContext } from "react";
// import { GlobalContext } from "../Context";
// import Recipecard from "../components/recipecard";

// const Favourites = () => {
//   const { favourites } = useContext(GlobalContext);

//   if (favourites.length === 0) {
//     return <h2>No favourites added yet</h2>;
//   }

//   return (
//     <div>
//       <h2>Your Favourites</h2>
//       {favourites.map((item) => (
//         <Recipecard key={item.id} recipe={item} />
//       ))}
//     </div>
//   );
// };

// export default Favourites;







import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { GlobalContext } from "../Context";


const Favourites = () => {
  const { favourites, toggleFavourite } = useContext(GlobalContext);

  if (favourites.length === 0) {
    return <h2 className="text-center mt-10">No favourites added</h2>;
  }

  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Favourites</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {favourites.map((item) => (
          <div
            key={item.id}
            className="bg-indigo-50 p-4 rounded-xl shadow"
          >
            <img
              src={item.image_url}
              alt={item.title}
              className="h-48 w-full object-cover rounded-lg"
            />

            <h3 className="mt-3 font-semibold">{item.title}</h3>

            <button
              onClick={() => toggleFavourite(item)}
              className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg mr-3"
            >
              Remove ❤️
            </button>
              {<Link
                    to={`/recipe-item/${item.id}`}
                    className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider 
                    inline-block shadow-md bg-blue-800 text-white"
                >
                    Recipe Details
                </Link>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
