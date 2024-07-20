import React from "react";
import Body from "../Body";
import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/mockRestroListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// it("Shoud render the body component with search field and cards before and after clicking search", async () => {
//   await act(async () =>
//     render(
//       // If you wiill not wrap Body with <BrowserRouter> then you will get an error for <Link>
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     )
//   );

//   const cardsBeforeSearch = screen.getAllByTestId("rescard");
//   expect(cardsBeforeSearch.length).toBeGreaterThan(2);

//   const searchBtn = screen.getByRole("button", { name: /search/i });
//   const searchInput = screen.getByTestId("searchInput");

//   // the target represents the (e) [i.e (e)=>{}] and value is what we are typing inside the input field
//   fireEvent.change(searchInput, { target: { value: "Maharani" } });
//   fireEvent.click(searchBtn);
//   //   console.log(searchBtn);

//   // If I type Maha in the input field and click search button then it should render 2 restaurant cards 'Maharaja' and 'Maharani'
//   const cardsAfterSearch = screen.getAllByTestId("rescard");
//   expect(cardsAfterSearch.length).toBe(1);
// });

it("Shoud render the body component with search field and cards before and after clicking search", async () => {
  await act(async () =>
    render(
      // If you wiill not wrap Body with <BrowserRouter> then you will get an error for <Link>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("rescard");
  expect(cardsBeforeFilter.length).toBeGreaterThan(2);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);
  //   console.log(searchBtn);

  // If I type Maha in the input field and click search button then it should render 2 restaurant cards 'Maharaja' and 'Maharani'
  const cardsAfterFilter = screen.getAllByTestId("rescard");
  expect(cardsAfterFilter.length).toBeGreaterThan(7);
});
