import Data from "./Data/cardData.json"
import Card from "./components/ui/Card";

const App = () => {
  return (
    <div className="w-full max-w-4xl flex mx-auto my-32 bg-green-100">
      {Data.map((joke, index) => (
        <Card {...joke} key={index} />
      ))}
    </div>
  );
}
export default App
