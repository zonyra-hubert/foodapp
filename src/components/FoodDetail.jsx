import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";
export default function Footdetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setISLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "3c2811fa94ff4f65982c0ce4b700bxxx";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setISLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipe}>
        <h1 className={styles.recipeName}> {food.title}</h1>

        <img className={styles.recipeImage} src={food.image} alt="Food Image" />

        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰ {food.readyInMinutes} Minutes</strong>
          </span>

          <span>
            👪 <strong>Serves {food.servings}</strong>
          </span>
          <span>
            {" "}
            <strong>
              {food.vegetarian ? "  🥕 Vegetarian" : "  🥩 Non-Vegetarian"}
            </strong>{" "}
          </span>
          <span>
            {" "}
            <strong>{food.vegan ? "  🐄 Vegan" : ""} </strong>{" "}
          </span>
        </div>

        <div>
          <span>${food.pricePerServing / 100} Per serving</span>
        </div>

        <div>
          <h2>Ingredients</h2>
          <ItemList food={food} isLoading={isLoading} />
          <h2>Instructions</h2>
          <ol>
            <div className={styles.recipeInstructions}>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                food.analyzedInstructions[0].steps.map((step) => (
                  <li>{step.step}</li>
                ))
              )}
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
}
