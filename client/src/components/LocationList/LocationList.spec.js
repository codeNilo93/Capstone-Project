import { render, screen } from '@testing-library/react'
import CardList from './CardList'

test('renders learn react link', () => {
  render(<CardList />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
