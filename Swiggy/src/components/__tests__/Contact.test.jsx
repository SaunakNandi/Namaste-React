import React from "react";
import Contact from "../Contact.jsx";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Contact Us page Test Case", () => {
  beforeEach(() => {
    // console.log("Runs before each of the test cases");
  });
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("button");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  // it is the alias of test
  it("Should load 2 input boxes inside contact us component", () => {
    render(<Contact />);

    // Querying

    // for multiple elements we use getAll
    const inputBoxes = screen.getAllByRole("textbox"); // a jsx element is returned

    expect(inputBoxes.length).toBe(2);
  });

  beforeAll(() => {
    // console.log("Runs before all the test cases");
  });
  afterAll(() => {
    // console.log("Runs after all the test cases");
  });
  afterEach(() => {
    // console.log("Runs after each of the test cases");
  });
});
