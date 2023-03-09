
const Card = ({setup, punchline}) => {
  return (
    <div className="flex flex-col gap-y-6 bg-white m-8 p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold">{setup}</h2>
        <p>{punchline}</p>
    </div>
  );
};

export default Card
