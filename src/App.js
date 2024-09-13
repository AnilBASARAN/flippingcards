
import './App.css';
import PlayingCard from "./PlayingCard";


const App = () => {

  
  
  return <div className="flex justify-center items-center h-screen m-4 p-4 " >
    <PlayingCard suit="fa-diamond" color="text-red-500" number = "A" />
    <PlayingCard suit="fa-diamond" color="text-red-500" number = "K" />
    <PlayingCard suit="fa-diamond" color="text-red-500" number = "2" />
 
  </div>;
};

export default App;
