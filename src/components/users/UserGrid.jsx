import UserCard from './UserCard';

const UserGrid = ({ userData }) => {
  return (
    <div className="user-grid">
      {userData.map(data => (
        <UserCard
          key={data.id}
          login_name={data.login}
          name={data.name}
          html_url={data.html_url}
          image={data.avatar_url ? data.avatar_url : '/not_found.png'}
          bio={data.bio ? data.bio : 'N/A'}
          location={data.location ? data.location : 'location not set'}
          createdAt={data.created_at}
          publicRepos={data.public_repos}
        />
      ))}
    </div>
  );
};

export default UserGrid;
