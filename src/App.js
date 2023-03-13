import { useEffect, useState } from "react";
import Card from "./components/ui/Card";
const App = () => {
  const [data, cardData] = useState([]);
  function getData(){
   fetch("https://random-data-api.com/api/users/random_user?size=10")
   .then((res) => res.json())
   .then((data) => {
     cardData(data);
   });
  }
  useEffect(() => {
   getData()
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-blue-100 py-32">
      <button
        className="px-4 py-2 rounded-lg bg-red-600 text-white text-bold"
        onClick={getData}
      >
        Fetch Random
      </button>
      <div className="grid grid-cols-2 gap-4 w-1/2 m-auto">
        {data.map((element, index) => (
          <Card {...element} key={index} />
        ))}
      </div>
    </div>
  );
};
export default App;
