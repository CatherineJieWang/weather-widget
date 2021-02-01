import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import InputBlock from "../components/inputBlock/features/InputBlock";

test("Make Sure Inputted Text Traggered Onchange Function", () => {
  const container = render(
    <InputBlock
      city={"Sydney"}
      setCity={() => console.log("setCity")}
      setWeathers={() => console.log("setWeathers")}
    ></InputBlock>
  );
  const search_input = container.getByTestId("search");
  fireEvent.change(search_input, { target: { value: "london" } });
  expect(search_input.value).toEqual("london");
});
