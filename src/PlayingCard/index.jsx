import {useState} from "react";
import Front from "./Front.jsx";
import Back from "./Back.jsx";


const Card=(props)=>{
  
  const {color,suit,number}=props;
  const [isFlipped, setIsFlipped] = useState(true);
  const handleClick =()=> setIsFlipped(!isFlipped);

  return(
    
    isFlipped ? <Front handleClick={handleClick} number={number} suit={suit} color={color} /> :
    
<Back handleClick={handleClick} />

      
    
  );
  
};

export default Card;