import { Link, useParams } from 'react-router-dom';
import { getRepoByName } from '../api/github';
import { useQuery } from '@tanstack/react-query';
// import ReposGrid from '../components/user_repos/ReposGrid';
import RepoPaging from '../components/user_repos/RepoPaging';

const User = () => {
  const { loginName } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ['user', loginName],
    queryFn: () => getRepoByName(loginName),
  });

  if (showError) {
    return <div>We have an Error : {showError.message}</div>;
  }

  if (showData) {
    return (
      <div className="relative">
        <div className="search-again">
          <Link className="search-again-link" to="/">
            Search Another
          </Link>
        </div>

        <div className="flex repo-img">
          <div className="image-wrapper">
            <img
              className="image-con"
              src={showData[0].owner.avatar_url}
              alt={showData[0].owner.login}
            ></img>
          </div>
          <div className="repo-owner">
            <h2>{showData[0].owner.login}</h2>
            <Link to={showData[0].owner.html_url}>
              {showData[0].owner.html_url}
            </Link>
          </div>
        </div>

        <div className="repo-title">
          <hr />
          <h1>Repositories :- </h1>
        </div>
        <RepoPaging showData={showData} />
        {/* <ReposGrid showData={showData} /> */}
      </div>
    );
  }

  return <div className="loader flex"></div>;
};

export default User;
