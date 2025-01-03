import { useState } from 'react';
import Container from './components/Container.jsx';
import "./App.css"
import FoodDetail from './components/FoodDetail.jsx';
import Nav from './components/Nav.jsx';
import Search from './components/Search.jsx';
import FoodList from './components/FoodList.jsx';
import InnerContainer from './components/InnerContainer.jsx';
function App() {
const [foodData, setFoodData] = useState([]);
const [foodId, setFoodId] =useState("658615");


  return (
    < div className='App'>
      <Nav />
      <Search foodData ={foodData} setFoodData ={setFoodData} />
    <Container>
      <InnerContainer>
      <FoodList foodData ={foodData} setFoodId={setFoodId}/>
      </InnerContainer>
      <InnerContainer>
        <FoodDetail foodId={foodId} />
      </InnerContainer>
  </Container>
   
    </div>
  )
}

export default App
