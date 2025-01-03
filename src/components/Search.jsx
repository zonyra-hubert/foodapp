import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch"

const API_KEY = "3c2811fa94ff4f65982c0ce4b700xxxx"
export default function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState("pizza"); 

    //syntax of useeffect hook
    useEffect(() =>{
       async function fetchFood() {
      const res =  await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`) ;
      const data =   await res.json();
      console.log(data.results);
      setFoodData(data.results);
       }
       fetchFood();
    },[query]) 
    return <div className={styles.searchContainer} >
        <input className={styles.input}
        type="text"  onChange={(e)=> setQuery(e.target.value)} value={query}/>
    </div>
}
