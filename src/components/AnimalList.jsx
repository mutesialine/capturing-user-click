
const AnimalList = ({list}) => {
  return (
    <div>
      {list.map((animal, index) => (
        <p className="border border-black bg-white px-6 py- text-xl" key={index}>
          {animal}
        </p>
      ))}
    </div>
  );
}

export default AnimalList
