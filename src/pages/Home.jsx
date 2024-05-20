import { useState } from 'react';
import { searchForUser } from '../api/github';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async searchStr => {
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
      //For Not Found Message
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
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
