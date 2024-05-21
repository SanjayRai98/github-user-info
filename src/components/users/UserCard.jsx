import { Link } from 'react-router-dom';

const UserCard = ({ login_name, name, html_url, image, bio, createdAt }) => {
  return (
    <div>
      <h1></h1>
      <div>
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <a href={html_url} target="_blank" rel="noreferrer">
        {html_url}
      </a>

      <p>Bio : {bio}</p>
      <p>Created On : {createdAt.slice(0, 10)}</p>
      <Link to={`/user/${login_name}`}>Show Repositories</Link>
    </div>
  );
};

export default UserCard;
