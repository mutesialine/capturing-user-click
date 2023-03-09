import Data from "./Data/cardData";
import Card from "./components/ui/Card";

const App = () => {

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-100">
        { Data.map(())
          
        }<Card/>
    </div>
  );
}
export default App
