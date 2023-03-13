
const Card = ({ firstName, lastName, avatar, employment }) => {
  return (
    <div className="flex flex-col gap-y-6 bg-white m-8 p-8 shadow-md rounded-md cursor-pointer flip">
      <div className="flip-content">
        <div className="flip-back">
          <p
            className="text-xl font-bold transform-style-3d"
          >
            More InformationHere
          </p>
        </div>
        <div className="flip-front">
          <img src={avatar} alt="avatar" />
          <h2 className="text-xl font-bold pt-3">
            {firstName} {lastName}
          </h2>
          <p>{employment.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
