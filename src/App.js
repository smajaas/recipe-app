import "./App.css";

function App() {
  //const recipe = "Hyderabad Mutton Briyani";
  const recipes = [
    {
      poster:
        "https://5.imimg.com/data5/BU/HQ/SL/SELLER-29361735/img-8992-jpg-500x500.JPG",
      name: "Mutton Briyani",
    },

    {
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-5XIhtQ7MkrmeoZYKRc4H8lb7xDQDjqUcQ&usqp=CAU",
      name: "Paneer Butter Masala",
    },
    {
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ1vQx7F1RaEoV9iET6GBTrRQ4F0FoEK9oA&usqp=CAU",
      name: "Al-Baik Chicken",
    },
    {
      poster:
        "https://image.eatencdn.com/image/ed415320-7612-4be3-8afa-be64f566c2d4/image.jpg",
      name: "Mutton Mandhi",
    },
    {
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSZO0ELaLgsdSqdOCzABzQn5aRsFIN9HfFA&usqp=CAU",
      name: "Pomfret Tandoori",
    },
  ];
  return (
    <div className="App">
      <div className="recipe-list-container">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-container">
            <img
              className="recipe-poster"
              src={recipe.poster}
              alt={recipe.name}
            />
            <p className="recipe-name">{recipe.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

//List only the recipe name
export default App;
