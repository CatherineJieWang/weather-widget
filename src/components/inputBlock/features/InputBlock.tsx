import React, { useState, FC, useEffect } from 'react';
import SearchList from './SearchList';
import '../styled/inputblock.scss';
import { InputBlockProps } from '../types';
import { Location } from '../../../common/interfaces';
import { getLocationFromServer } from '../../dataMiddleWare';
const InputBlock: FC<InputBlockProps> = (props) => {
  const { city, setCity, setWeathers } = props;
  const [inputValue, setInputValue] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<Location[]>([]);

  useEffect(() => {
    if (inputValue) {
      getLocationFromServer(inputValue, setSearchResult);
    }
  }, [inputValue]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setOpen(true);
    setInputValue(value);
  }
  return (
    <div className="input-container">
      <div className="input-container__input-block">
        <input
          data-testid="search"
          placeholder="Input Location"
          value={inputValue}
          onChange={(e) => handleChange(e)}
        ></input>
        {open && inputValue && (
          <SearchList
            searchResult={searchResult}
            setCity={setCity}
            setInputValue={setInputValue}
            setOpen={setOpen}
            setWeathers={setWeathers}
          />
        )}
      </div>
      <p className="input-container__display">Location : {city}</p>
    </div>
  );
};

export default InputBlock;
