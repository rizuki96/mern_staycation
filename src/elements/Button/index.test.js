import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from './index';

test('should not allowed click if button isDisabled is present', () => {
  const { container } = render(<Button isDisabled />);

  expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

test('should render loading/spinner', () => {
  const { container, getByText } = render(<Button isLoading />);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector('span')).toBeInTheDocument();
});

test('should render <a> tag', () => {
  const { container } = render(<Button type="link" isExternal />);

  expect(container.querySelector('a')).toBeInTheDocument();
});

test('should render <Link> component', () => {
  const { container } = render(<Router><Button href="" type="link" /></Router>);

  expect(container.querySelector('a')).toBeInTheDocument();
});
