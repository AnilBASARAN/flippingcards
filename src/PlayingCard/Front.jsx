import '@fortawesome/fontawesome-free/css/all.min.css';
const Front=(props)=>{

    const {number,color,suit,handleClick}=props;
    
    return(
        <div
        onClick={handleClick }
        className="cardContainer border-2 rounded-lg border-black w-40 h-56 flex flex-col justify-between p-3 m-4">
  
        <div className="flex justify-start text-4xl" >{number}</div>
        <div className="flex justify-center">
        <i className={`${color} justify-center text-3xl fa-solid ${suit}`}></i>
        </div>
        
       
        <div className="flex justify-end text-4xl " >{number}</div>
        
      </div>
      )
  };
  
  export default Front;