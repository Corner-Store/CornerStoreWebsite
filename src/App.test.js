import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";
import List from './businesses'

afterEach(cleanup);

/* TODO: TEST if list component shows up*/
it("should render List component", () => {
  const ListComponent = render(<App />);
  expect(ListComponent).toBeTruthy();
});

/* TODO: Adjust test to fit data*/
it("renders data correctly", () => {
  const fakeData = [{
    item: 'Express Cuts 10.18',
},
{
    item: 'Main Event Barbershop',
},
{
    item: 'Hair Me Out',
},
{
    item: 'Unique Cuts',
},{
    item: 'Seamless Hair Boutique',
},{
    item: 'Logwood Company, LLC',
},{
    item: 'Salon Monet',
},{
    item: 'Society Barbershop',
},{
    item: 'The Private Office Barbershop',
},{
    item: 'Styllistik',
},{
    item: 'Crowned by Glory Studios',
},{
    item: 'Vanguard Parking & General Services Corporation',
},{
    item: 'The 1854 Cycling Company',
},{
    item: 'Lawson Barbershop & Beauty',
},{
    item: 'At Ease Barber Shop',
},{
    item: 'Elizabeth Djanwah',
},{
    item: 'MathTalk',
},{
    item: 'G|Code Inc',
},{
    item: 'INSTITUTE FOR PAN AFRICAN CULTURAL EDUCATION,INC',
},{
    item: 'Black Girl Nutrition',
},{
    item: 'ANGEL CARE CLINIC, INC.',
},{
    item: 'Sage Family Dental Boston',
},{
    item: 'The Elite Nation Fitness',
},{
    item: 'The Wellness Collaborative, Inc.',
},{
    item: 'Skycom Courier',
},{
    item: 'TrelleBlazers International Hairport',
},
];
  const { getAllByTestId } = render(<App />);
  const itemNames = getAllByTestId("single-item").map((li) => li.textContent);
  const fakeItems = fakeData.map((c) => c.item);
  expect(itemNames).toEqual(fakeItems);
});

/* TODO: TEST business list shows up as 26 items*/
it("Total length of list should be 26", () => {
  const { getByTestId } = render(< App />);
  const listUl = getByTestId("item-list-businesses");
  expect(listUl.children.length).toBe(26);
});

/* TODO: TEST if business.js data renders correctly*/
