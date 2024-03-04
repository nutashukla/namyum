import { Cards } from "./Constant";
import FoodCards from "./FoodCards";
import { filterData } from "./Constant";
import { useState } from "react"
import { Link } from "react-router-dom";

const Body = () =>{
    const [searchText, setSearchText] = useState("")
    const [foodCards, setFoodCards] = useState(Cards)

    return(
        <>
        <Link to= "/"><div className="justify-between	flex pt-2 pl-[1130px]">
        <input onChange={(e)=>{
          setSearchText(e.target.value);
        }}
        className="ring-gray-300 ring-2 mt-2 h-10 p-2 w-[300px]" type="text" name="search" placeholder="  search recipes"/>
        <button onClick={()=>{
          const data = filterData(searchText, foodCards)
          setFoodCards(data);
        }}
        className="bg-black hover:bg-slate-600 text-white h-12 mx-2 mt-1 w-20 rounded-lg">Search</button>
        </div>
        <div className="flex flex-wrap ">
        {foodCards.map((cards,id)=> <Link to = {"/MenuItem/"+ cards.id} key={cards.id}><FoodCards {...cards} /></Link>)}
        
        {foodCards.map((cards,id)=> <Link to = {"/MenuItem/"+ cards.id} key={cards.id}><FoodCards {...cards} /></Link>)}
        {foodCards.map((cards,id)=> <Link to = {"/MenuItem/"+ cards.id} key={cards.id}><FoodCards {...cards} /></Link>)}
        {foodCards.map((cards,id)=> <Link to = {"/MenuItem/"+ cards.id} key={cards.id}><FoodCards {...cards} /></Link>)}
        {foodCards.map((cards,id)=> <Link to = {"/MenuItem/"+ cards.id} key={cards.id}><FoodCards {...cards} /></Link>)}
        {foodCards.map((cards,id)=> <Link to = {"/MenuItem/"+ cards.id} key={cards.id}><FoodCards {...cards} /></Link>)}
        {foodCards.map((cards,id)=> <Link to = {"/MenuItem/"+ cards.id} key={cards.id}><FoodCards {...cards} /></Link>)}
        {foodCards.map((cards,id)=> <Link to = {"/MenuItem/"+ cards.id} key={cards.id}><FoodCards {...cards} /></Link>)}
        {foodCards.map((cards,id)=> <Link to = {"/MenuItem/"+ cards.id} key={cards.id}><FoodCards {...cards} /></Link>)}
        </div>
        </Link>
        

        </>
    )
}

export default Body