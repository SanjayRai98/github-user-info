import { Link, useParams } from 'react-router-dom';

const User = () => {
  const { loginName } = useParams();

  return (
    <div>
      User Page
      <Link to="/">Search Another</Link>
      <h1>Showing Repository for {loginName}</h1>
    </div>
  );
};

export default User;
