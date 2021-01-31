import React, { FC } from "react";
import { SearchResult, Location } from "../types";
import "../styled/searchlist.scss";
import { getWeather } from "../../../data/fetchDataFromServer";

const SearchList: FC<SearchResult> = (props) => {
  const { searchResult,setInputValue, setCity, setOpen, setWeathers } = props;
  const getWeatherFromServer = async (cityId: number) => {
    try {
      if (cityId) {
        const weatherResult = await getWeather(cityId);
        if (weatherResult.data) {
          setWeathers(weatherResult.data.slice(0, 5));
        }
      }
    } catch {
      console.log("Server Error");
    }
  };

  return (
    <div className="search-container">
      {searchResult &&
        searchResult.map((data: Location, index: number) => (
          <p
            className="search-container__row"
            key={index}
            onClick={() => {
              if (data.woeid) getWeatherFromServer(data.woeid);
              setInputValue('')
              setCity(data.title);
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
