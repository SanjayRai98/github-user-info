import { Link } from 'react-router-dom';
import { Alert } from 'rsuite';

const UserCard = ({
  login_name,
  name,
  html_url,
  image,
  bio,
  createdAt,
  publicRepos,
}) => {
  const displayAlert = (message, duration) => {
    Alert.warning(message, duration);
  };
  return (
    <>
      <div className="search-img-wrapper">
        <img src={image} alt={name} />
      </div>
      <div className="search-card">
        <h2>{name ? name : 'Not Name Mention'}</h2>
        <a href={html_url} target="_blank" rel="noreferrer">
          {html_url}
        </a>

        <p>Bio : {bio}</p>
        <p>Created On : {createdAt.slice(0, 10)}</p>
        {publicRepos ? (
          <Link className="search-card-link" to={`/user/${login_name}`}>
            Show Repositories
          </Link>
        ) : (
          displayAlert('No Public Repos', 4000)
        )}
      </div>
    </>
  );
};

export default UserCard;
