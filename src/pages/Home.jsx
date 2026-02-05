
// import React, { useContext } from "react";
// import { GlobalContext } from "../Context";
// import Recipecard from "../components/recipecard";

// const Home = () => {
//   const { loading, recipes, msg} = useContext(GlobalContext);

//   if (loading) return <div>Loading...Please wait!</div>;

//   return (
//     <div>
//       <h2 className="text-center text-xl font-semibold my-4">{msg}</h2>
    

//       <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
//         { 
//           recipes.map((item) => (
//             <Recipecard key={item.id} item={item} />
//           ))
//         }
//       </div>
//     </div>
//   );
// };

// export default Home;









import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import Recipecard from "../components/recipecard";

const Home = () => {
  const { loading, recipes, msg } = useContext(GlobalContext);

  if (loading) return <div>Loading... Please wait!</div>

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')"
      }}
    >
      {/* overlay for better contrast */}
      <div className="min-h-screen bg-black/70">
        <h1 className="text-center text-3xl font-semibold text-white pt-5">
          {msg}
        </h1>

        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
          {recipes.map((item) => (
            <Recipecard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default Home;
