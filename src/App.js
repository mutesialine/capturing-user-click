import { useState } from "react";

const App = () => {
 const[count, setCount]= useState(0)
 const startCount = () =>{
 setCount((prevNumber) => prevNumber + 1)
 }
  return (
    <div className="w-full h-screen flex flex-col gap-y-6 justify-center items-center bg-blue-100">
      <p className="text-xl">Button has been clicked :{count} times</p>
      <button className="text-lg py-2 px-4 border bg-white rounded-lg" onClick={startCount}>
        click me
      </button>
    </div>
  );
}
export default App
