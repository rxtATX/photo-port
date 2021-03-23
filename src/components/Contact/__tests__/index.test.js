import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup)

describe('Contact form is rendering', () => {

  it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('cfh1')).toHaveTextContent('Contact Me')
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('indicates submit behavior', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('submit-btn')).toHaveTextContent('Submit')
  })
})