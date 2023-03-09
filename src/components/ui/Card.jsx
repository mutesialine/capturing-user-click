
const Card = () => {
  return (
    <div className="w-[500px]">
      <div className="flex flex-col">
        <h2 className="text-2xl">{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default Card
