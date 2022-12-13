import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import React from "react";
import Login from "./Auth/Login";

describe('Login', () => { 
   test('Should render login form correctly', () => { 
      render(<App />)
      const test = screen.getByText(/Login/i);
      expect(test).toBeInTheDocument();
    })
 })


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
