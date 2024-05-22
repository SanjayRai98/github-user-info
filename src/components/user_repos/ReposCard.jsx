const ReposCard = ({ name, description, createdAt }) => {
  return (
    <div className="dotted-border">
      <h2>{name}</h2>

      <h5>Description :</h5>
      <p>{description}</p>

      <h5>Created On :</h5>
      <p>{createdAt}</p>
    </div>
  );
};

export default ReposCard;
