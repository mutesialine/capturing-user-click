import { useState } from "react";

const App = () => {
  const[name ,setName]=useState({
    firstname:"",
    secondname: ""
  })
  const handleChange = (event) =>{
    setName(prevName => ({...prevName,[event.target.name]:event.target.value}))
  }
  const message = (event) => {
    event.preventDefault();
    alert(`Hello ${name.firstname} ${name.secondname}`);
  }
  return (
    <div className="w-full h-screen flex flex-col justify-center gap-y-4 items-center bg-blue-100">
      <input
        type="text"
        placeholder="First Name"
        name="firstname"
        value={name.firstname}
        onChange={handleChange}
        className="px-4 py-2"
      />
      <input
        type="text"
        placeholder="Second Name"
        name="secondname"
        value={name.secondname}
        onChange={handleChange}
        className="px-4 py-2"
      />
      <button className="px-12 py-1 bg-red-700 rounded-md shadow-md text-white text-2xl" onClick={message}>Greet Me</button>
    </div>
  );
}
export default App
