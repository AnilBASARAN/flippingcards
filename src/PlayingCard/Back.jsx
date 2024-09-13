import '@fortawesome/fontawesome-free/css/all.min.css';

const Back=(props)=>{
    const {handleClick} = props;
    return(
  
      <div
        onClick={handleClick }
        className="cardContainer border-2 border-black w-40 h-56 rounded-lg flex flex-col justify-center bg-rose-200 items-center p-3 m-4">
  
       <i className="fa-solid  fa-circle-question text-5xl"></i>
        
      </div>
      
    );
  };
  
  export default Back;