const ReposCard = ({ name, description, createdAt }) => {
  return (
    <div className="dotted-border">
      <div>
        <h2>{name}</h2>
      </div>

      <div className="description">
        <h5 className="display-inline">Description :</h5>
        <p className="display-inline">{description}</p>
      </div>
      <div className="created-on">
        <h5 className="display-inline">Created On :</h5>
        <p className="display-inline">{createdAt}</p>
      </div>
    </div>
  );
};

export default ReposCard;
