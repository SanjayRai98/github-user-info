import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getRepoByName } from '../api/github';

const User = () => {
  const { loginName } = useParams();

  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRepoByName(loginName);
        setShowData(data);
      } catch (error) {
        setShowError(error);
      }
    }

    fetchData();
  }, [loginName]);

  if (showError) {
    return <div>We have an Error : {showError.message}</div>;
  }

  if (showData) {
    return (
      <div>
        <div>
          User Page
          <Link to="/">Search Another</Link>
          <h1>{loginName} Repositories</h1>
        </div>
        <h3>Data for {showData[0].name}</h3>
        <ul>
          {showData.map(data => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1>Data is loading</h1>
    </div>
  );
};

export default User;
