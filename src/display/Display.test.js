import React from 'react'; 
import { render } from "@testing-library/react";
import Display from './Display';


test('locked', () => { 
    const { getByText } = render(<Display locked={true}/>)
    getByText(/Locked/i);
})
test('unlocked', () => { 
    const { getByText } = render(<Display locked={false}/>)
    getByText(/Unlocked/i);
})

test('closed', () => { 
    const { getByText } = render(<Display closed={true}/>)
    
    getByText(/Closed/i);  
    // getByTestId(/red-led/i)
})
test('Open', () => { 
    const { getByText } = render(<Display closed={false}/>)
    getByText(/Open/i);
})