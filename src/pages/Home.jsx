import { useState } from 'react';
import { searchForUser } from '../api/github';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');

  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearchValueChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onsearch = async ev => {
    ev.preventDefault();

    try {
      setApiDataError(null);

      const apiResult = await searchForUser(searchStr);
      setApiData([apiResult]);
    } catch (error) {
      setApiDataError(error);
    }

    console.log(apiData);
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured: {apiDataError.message}</div>;
    }

    if (apiData != null && apiData[0].message) {
      return <div>{apiData[0].message}</div>;
    } else if (apiData) {
      return apiData.map(data => (
        <div key={data.id}>
          {data.name}
          {data.html_url}
        </div>
      ));
    }

    return null;
  };

  return (
    <div>
      <h3>Home Page</h3>
      <form action="" onSubmit={onsearch}>
        <input type="text" value={searchStr} onChange={onSearchValueChange} />
        <button type="submit">Search</button>
      </form>

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
