import React from 'react'
import {render, cleanup} from '@testing-library/react'

import List from './List'

afterEach(cleanup)

it("should render List component", () => {    
    const ListComponent = render(<List />);    
    expect(ListComponent).toBeTruthy();  
});

it('renders data correctly', () => {
    const fakeData = [{
        item: 'Express Cuts 10.18 1',
    },
    {
        item: 'Main Event Barbershop,
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
    }
]
    const {getAllByTestId} = render(<List />)
    const itemNames = getAllByTestId('single-item').map(li => li.textContent)
    const fakeItems = fakeData.map(c => c.item)
    expect(itemNames).toEqual(fakeItems)
     
  })

  it('Total length of list should be 3', () => {
    const {getByTestId} = render(<List />)
    const listUl = getByTestId('item-list-wrap');
    expect(listUl.children.length).toBe(3);
  })