import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utlis/appStore";
import { BrowserRouter } from "react-router-dom";

// watch from 2:00:00
it("Should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton=screen.getByRole('button')
  const loginButton = screen.getByText(/login/i);
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton=screen.getByRole('button')
  const cartItems = screen.getByText("Cart - (0 Items)"); // I have written Cart - in a different way. Have to check the corresponding test in chat gpt
  expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "logout" });
  expect(logoutButton).toBeInTheDocument();
});
