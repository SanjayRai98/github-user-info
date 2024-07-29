import { useState } from 'react';
import { searchForUser } from '../api/github';
import SearchForm from '../components/SearchForm';
import UserGrid from '../components/users/UserGrid';
import { Alert } from 'rsuite';

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

    //console.log(apiData);
  };

  const notFoundMessage = message => {
    Alert.warning(message, 4000);
    return message;
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured: {apiDataError.message}</div>;
    }

    if (apiData != null && apiData[0].message) {
      //For Not Found Message
      return (
        <div className="not-found-data">
          {notFoundMessage(apiData[0].message)}
        </div>
      );
    } else if (apiData) {
      return <UserGrid userData={apiData} />;
    }

    return <div className="no-data"></div>;
  };

  return (
    <div>
      <h3 className="text-center">Home Page</h3>
      <SearchForm onSearch={onSearch} />

      <div className="inline">{renderApiData()}</div>
    </div>
  );
};

export default Home;
