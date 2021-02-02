import React, { FC } from 'react';
import { SearchResult } from '../types';
import { Location } from '../../../common/interfaces';
import '../styled/searchlist.scss';
import { getWeatherFromServer } from '../../dataMiddleWare';
const SearchList: FC<SearchResult> = (props) => {
  const { searchResult, setInputValue, setCity, setOpen, setWeathers } = props;
  return (
    <div className="search-container">
      {searchResult &&
        searchResult.map((data: Location, index: number) => (
          <p
            className="search-container__row"
            key={index}
            onClick={() => {
              if (data.woeid) getWeatherFromServer(data.woeid, setWeathers);
              setInputValue('');
              setCity(data.title ? data.title : '');
              setOpen(false);
            }}
          >
            {data.title}
          </p>
        ))}
    </div>
  );
};

export default SearchList;
