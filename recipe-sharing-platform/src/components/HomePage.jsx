import { useState, useEffect, use } from "react";

function HomePage() {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setRecipe(jsonData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  });
  return (
    <div className="home-page">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Recipe sharing platform
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {recipe.map(({ id, title, summary, image }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img alt="image" src={image} className="w-full h-48 object-cover" />
            <div>
              <h2 className="text-blue-500 text-xl font-semibold mb-2">
                {title}
              </h2>
              <p className="text-gray-600">{summary}</p>
              <a
                href={`/recipe/${id}`}
                className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
              >
                view recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomePage;
