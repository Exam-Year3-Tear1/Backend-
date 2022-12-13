import { render, screen, fireEvent } from '@testing-library/react';
import React from "react";
import Home from './Home';

test('renders the landing page', () => {
   render(<Home />);
 });

test('Have calculator form', () => {
   render(<Home />);
   
   expect(screen.getByText("Operand 1")).toBeInTheDocument();
   expect(screen.getByText("Operand2")).toBeInTheDocument();
   expect(screen.getByText("Operation")).toBeInTheDocument();
   expect(screen.getByRole("button")).toBeInTheDocument();
 });

 test("calculator if working", () => {
   // render the component on virtual dom
   render(<Home />);
   
   //select the elements you want to interact with
   const button = screen.getByTestId("calculate");
   const oper1 = screen.getByText("Operand 1");
   const oper2 = screen.getByText("Operand 2");
   const oper = screen.getByText("operation")
   
   //interact with those elements
   fireEvent.click(button);
   let sum;
   if(oper === "+"){
      sum = oper1 + oper2;
   }
   expect(sum).toBeInTheDocument();
});
