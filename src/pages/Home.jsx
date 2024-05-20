import { useState } from 'react';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');

  const onSearchValueChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onsearch = async ev => {
    ev.preventDefault();

    //const response = await fetch('https://api.github.com/users/SanjayRai98');

    const response = await fetch(`https://api.github.com/users/${searchStr}`);
    const body = await response.json();

    console.log(body);
  };

  return (
    <div>
      <h3>Home Page</h3>
      <form action="" onSubmit={onsearch}>
        <input type="text" value={searchStr} onChange={onSearchValueChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
