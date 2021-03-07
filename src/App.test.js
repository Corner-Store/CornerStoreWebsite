import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/* TODO: TEST if list component shows up*/
it("should render List component", () => {
  const ListComponent = render(<App />);
  expect(ListComponent).toBeTruthy();
});

/* TODO: Adjust test to fit data*/
it("renders data correctly", () => {
  const fakeData = [
    {
      item: "item 1",
    },
    {
      item: "item 2",
    },
    {
      item: "item 3",
    },
  ];
  const { getAllByTestId } = render(<App />);
  const itemNames = getAllByTestId("single-item").map((li) => li.textContent);
  const fakeItems = fakeData.map((c) => c.item);
  expect(itemNames).toEqual(fakeItems);
});

/* TODO: TEST business list shows up as 26 items*/
it("Total length of list should be 26", () => {
  const { getByTestId } = render(<List />);
  const listUl = getByTestId("item-list-businesses");
  expect(listUl.children.length).toBe(26);
});

/* TODO: TEST if business.js data renders correctly*/
