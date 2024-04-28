import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments and decrements count', () => {
  const {getByText} = render(<Counter />);
  const incrementButton = getByText('Increment');
  const decrementButton = getByText('Decrement');
  const count = getByText('0');

  //initial count as 0 
  expect(count).toBeInTheDocument('0');

  //increment count
  fireEvent.click(incrementButton);

  //count should be 1
  expect(count).toBeInTheDocument('1');

  //decrement count
  fireEvent.click(decrementButton);

  //count should be 0
  expect(count).toBeInTheDocument('0');
});