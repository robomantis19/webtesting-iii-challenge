import React from 'react'; 
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls'; 



test('testing controls', () => {

    const { getByText } = render(<Controls/>);
    const button0 = getByText(/Close Gate/i);
    fireEvent.click(button0);
    const button = getByText(/Lock Gate/);
    
});

test('testing controls', () => {

    const { getByText } = render(<Controls/>);
    const button0 = getByText(/Lock Gate/i);
    fireEvent.click(button0);
    const button = getByText(/Close Gate/);
    
});