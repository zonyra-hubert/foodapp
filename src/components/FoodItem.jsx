import styles from "./fooditem.module.css";
export default function FoodItem({food,setFoodId}){
return <div className= {styles.itemContainer} >
    <img src={food.image} alt=""  className= {styles.imageItem} />
   <div className={styles.itemContent}>
    <p className={styles.itemName}> {food.title}</p>
   </div>
   <div className={styles.buttonContainer}>
   <button className={styles.itemButton} onClick={()=>{
    console.log(food.id)
    setFoodId(food.id)
    }} >View Recipe</button>
   </div>

</div>
}