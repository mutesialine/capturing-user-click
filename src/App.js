
const App = () => {
  function Message(e){
    e.preventDefault();
    alert("clicked!");
  }
  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-100">
        <button className="text-xl" onClick={Message}>click me</button>
    </div>
  );
}

export default App
