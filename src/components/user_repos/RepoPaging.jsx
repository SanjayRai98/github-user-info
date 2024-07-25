import { useState } from 'react';
import ReposGrid from './ReposGrid';
import { Divider, Dropdown, Pagination } from 'rsuite';

const RepoPaging = ({ showData }) => {
  const dataLength = showData.length;
  //number of record to be shown in a page

  const [dataMaxLimit, setDataMaxLimit] = useState(4);
  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(dataMaxLimit);

  const [page, setPage] = useState(1);

  let modifiedShowData = showData.slice(startIndex, lastIndex);

  //console.log(modifiedShowData);

  const onPagingOptionChange = event => {
    //change string to Number
    const changedValue = Number(event);

    setDataMaxLimit(changedValue);

    //set startIndex and lastindex
    setStartIndex(0);
    setLastIndex(changedValue);
  };

  const changePage = currentPage => {
    setPage(currentPage);

    //set startIndex and lastIndex
    setStartIndex(dataMaxLimit * currentPage - dataMaxLimit);
    setLastIndex(dataMaxLimit * currentPage);
  };

  return (
    <div className="repo-paging">
      <div className="dropdown">
        <h4>Record Per Page:</h4>
        <Dropdown
          title="Paging"
          trigger={['hover', 'click']}
          activeKey={dataMaxLimit.toString()}
          onSelect={onPagingOptionChange}
        >
          <Dropdown.Item eventKey="4">Four: 4</Dropdown.Item>
          <Dropdown.Item eventKey="8">Eight: 8</Dropdown.Item>
          <Dropdown.Item eventKey="12">Twelve: 12</Dropdown.Item>
          <Dropdown.Item eventKey="20">Twenty: 20</Dropdown.Item>
        </Dropdown>
      </div>
      <Divider />
      <h3 className="text-center">Page {page}</h3>
      <div className="page-swipe">
        <Pagination
          prev
          last
          first
          size="lg"
          pages={
            dataLength % dataMaxLimit == 0
              ? dataLength / dataMaxLimit
              : dataLength / dataMaxLimit + 1
          }
          activePage={page}
          onSelect={changePage}
          className="navigation-button"
        ></Pagination>
      </div>
      <ReposGrid showData={modifiedShowData} />
    </div>
  );
};

export default RepoPaging;
