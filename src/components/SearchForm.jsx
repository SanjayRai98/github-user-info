import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    onSearch(searchStr);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="search-input"
        type="text"
        value={searchStr}
        onChange={onSearchInputChange}
        placeholder="Search for something"
      />
      <div className="search-button">
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
