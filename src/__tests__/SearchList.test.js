import React from "react";
import renderer from "react-test-renderer";
import SearchList from "../components/inputBlock/features/SearchList";

test("<SearchList /> renders with correct result with 'Sant' as prop", () => {
  const searchResult = [
    {
      title: "Santa Cruz",
      location_type: "City",
      woeid: 2488853,
      latt_long: "36.974018,-122.030952",
    },
    {
      title: "Santiago",
      location_type: "City",
      woeid: 349859,
      latt_long: "-33.463039,-70.647942",
    },
    {
      title: "Santorini",
      location_type: "City",
      woeid: 56558361,
      latt_long: "36.406651,25.456530",
    },
    {
      title: "Santander",
      location_type: "City",
      woeid: 773964,
      latt_long: "43.461498,-3.810010",
    },
    {
      title: "Santa Cruz de Tenerife",
      location_type: "City",
      woeid: 773692,
      latt_long: "28.46163,-16.267059",
    },
    {
      title: "Santa Fe",
      location_type: "City",
      woeid: 2488867,
      latt_long: "35.666431,-105.972572",
    },
  ];
  const tree = renderer
    .create(
      <SearchList
        searchResult={searchResult}
        setInputValue={() => console.log("setInputValue")}
        setCity={() => console.log("setCity")}
        setOpen={() => console.log("setOpen")}
        setWeathers={() => console.log("setWeathers")}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
