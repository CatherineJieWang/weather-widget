import React, { useState, FC, useEffect } from "react";
import { getNameLocation } from "../../../data/fetchDataFromServer";
import SearchList from "./SearchList";
import "../styled/inputblock.scss";
import { Location, InputBlockProps } from "../types";

const InputBlock: FC<InputBlockProps> = (props) => {
  const { city, setCity, setWeathers } = props;
  const [inputValue, setInputValue] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<Location[]>();
  const getLocationFromServer = async (city: string) => {
    try {
      const locationResult = await getNameLocation(city);
      if (locationResult.data) {
        setSearchResult(locationResult.data);
      }
      return locationResult;
    } catch {
      console.log("Server Error");
    }
  };
  useEffect(() => {
    if (inputValue) {
      getLocationFromServer(inputValue);
    }
  }, [inputValue]);

  function handleChange(event: any) {
    const value = event.target.value;
    setOpen(true);
    setInputValue(value);
  }
  return (
    <div className="input-container">
      <div className="input-container__input-block">
        <input
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
