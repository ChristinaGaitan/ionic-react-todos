import React from 'react'
import { render } from '@testing-library/react'
import Home from './Home'

test('page should have a title of Ionic React Todos', async () => {
  const { findByText } = render(<Home />)
  await findByText('Ionic React Todos');
})
