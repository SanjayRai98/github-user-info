import { useState } from 'react';
import ReposGrid from './ReposGrid';

const RepoPaging = ({ showData }) => {
  const dataLength = showData.length;
  //number of record to be shown in a page
  const dataMaxLimit = 4;

  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(dataMaxLimit);

  let modifiedShowData = showData.slice(startIndex, lastIndex);

  //console.log(modifiedShowData);

  //to see previous page repositories
  const previousIndex = () => {
    if (lastIndex == dataMaxLimit) {
      //alert('page is at home page or 1st page');
    } else if (lastIndex > dataMaxLimit) {
      if (lastIndex <= dataLength || lastIndex > dataLength) {
        setStartIndex(count => count - dataMaxLimit);
        setLastIndex(count => count - dataMaxLimit);

        console.log(
          'In If Condition : ',
          'Index start at',
          startIndex,
          'Index last at',
          lastIndex
        );
      } else {
        //console.log('end page is reach');
      }
    }
  };

  //to see next respositories
  const nextIndex = () => {
    if (lastIndex <= dataLength) {
      setStartIndex(count => count + dataMaxLimit);
      setLastIndex(count => count + dataMaxLimit);
      console.log(
        'In If Condition : ',
        'Index start at',
        startIndex,
        'Index last at',
        lastIndex
      );
    } else {
      //console.log('end page is reach');
    }
  };

  return (
    <div className="repo-paging">
      <div className="page-swipe">
        {' '}
        <button
          className="previous-page navigation-button"
          onClick={() => previousIndex()}
        >
          Previous
        </button>
        <button
          className="next-page navigation-button"
          onClick={() => nextIndex()}
        >
          Next
        </button>
      </div>
      <h3 className="text-center">Page {lastIndex / dataMaxLimit}</h3>
      <ReposGrid showData={modifiedShowData} />
    </div>
  );
};

export default RepoPaging;
