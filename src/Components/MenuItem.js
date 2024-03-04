import { Menu } from "./Constant";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";

const MenuItem = () => {
const params = useParams();
const {id} = params;
console.log(id) 
  return (
        <div className="">
          {Menu.map((menu, id)=><MenuCard {...menu} key={menu.id}/>)}
        </div>
    
  )
}

export default MenuItem