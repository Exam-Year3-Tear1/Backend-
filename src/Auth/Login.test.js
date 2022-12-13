import { render, screen, fireEvent } from '@testing-library/react';
import React from "react";
import Login from "Login";

test('Login Rendered', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
