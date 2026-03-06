import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context";

const Navbar = () => {
  const { search, setSearch, handleSubmit, favourites } =
    useContext(GlobalContext);

  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="container mx-auto px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

        <h1 className="text-2xl font-bold text-white">
          RecipeCenter
        </h1>
              
        <form
          onSubmit={handleSubmit}
          className="flex w-full md:w-auto gap-3"
        >
          <input
            type="text"
            placeholder="Enter recipe name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-64 px-4 py-2 rounded-lg border
                       focus:outline-none border-indigo-400 bg-gray-50"
          />

          <button
            type="submit"
            className="px-5 py-2 rounded-lg border border-indigo-500
                       bg-gray-100 text-indigo-500 font-semibold
                       hover:bg-green-500 hover:text-white
                       transition duration-300"
          >
            Search
          </button>
        </form>

        
        <ul className="flex gap-6 text-lg font-medium text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white"
                  : "hover:text-gray-200"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white flex items-center gap-1"
                  : "hover:text-gray-200 flex items-center gap-1"
              }
            >
              Favourites
              {favourites?.length > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {favourites.length}
                </span>
              )}
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
