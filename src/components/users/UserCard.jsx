import { Link } from 'react-router-dom';

const UserCard = ({ login_name, name, html_url, image, bio, createdAt }) => {
  return (
    <>
      <div className="search-img-wrapper">
        <img src={image} alt={name} />
      </div>
      <div className="search-card">
        <h2>{name}</h2>
        <a href={html_url} target="_blank" rel="noreferrer">
          {html_url}
        </a>

        <p>Bio : {bio}</p>
        <p>Created On : {createdAt.slice(0, 10)}</p>
        <Link className="search-card-link" to={`/user/${login_name}`}>
          Show Repositories
        </Link>
      </div>
    </>
  );
};

export default UserCard;
