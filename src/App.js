
const App = () => {
 const animals= ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <div className="w-full flex justify-center items-center h-screen bg-blue-100">
      <ul className="space-y-2 marker:text-black list-disc">
        {animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}
export default App
