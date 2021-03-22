import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '../'

const category = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('PhotoList is rendering', () => {
  it('renders', () => {
    render(<PhotoList category={category} />);
  });

  it('renders', () => {
    const { asFragment } = render(<PhotoList category={category} />)
    expect(asFragment()).toMatchSnapshot()
  });
});