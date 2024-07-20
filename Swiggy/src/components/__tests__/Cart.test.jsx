import React from "react";
import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_MENU from "../mocks/Mock_ResMenu.json";
import { fireEvent } from "@testing-library/dom";
import { Provider } from "react-redux";
import appStore from "../../utlis/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Cart } from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_MENU),
  });
});
it("should load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Snacks (5)");
  fireEvent.click(accordianHeader);

  const foodList = screen.getAllByTestId("foodItems");
  expect(foodList.length).toBe(5);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);
  const cartScreen1 = screen.getByText("Cart - (1 Items)");
  expect(cartScreen1).toBeInTheDocument();

  fireEvent.click(addBtns[2]);
  const cartScreen2 = screen.getByText("Cart - (2 Items)");
  expect(cartScreen2).toBeInTheDocument();
  const inTheCart = screen.getAllByTestId("foodItems").length;

  // since you added 2 items to the cart it becomes 7 => 5 previously in the accordian and 2 newly added to cart (both accordian and cart items have same component <ItemsList/>)
  expect(inTheCart).toBe(7);
  const clearCart = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCart);
  const showAfterClearCart = screen.getAllByTestId("foodItems").length;
  expect(showAfterClearCart).toBe(5);

  const clearedCartText = screen.getByText(
    "OOps cart is empty. Please add some item to cart"
  );
  expect(clearedCartText).toBeInTheDocument();
});
//   });
