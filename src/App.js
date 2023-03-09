import AnimalList from "./components/AnimalList";
const App = () => {
const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <div className="w-full h-screen flex flex-col justify-center gap-y-4 items-center bg-blue-100">
      <AnimalList list={animals} />
    </div>
  );
}
export default App
