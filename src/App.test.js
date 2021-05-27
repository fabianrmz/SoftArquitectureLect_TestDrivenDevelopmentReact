import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import React from 'react';
import {prettyDom} from '@testing-library/dom';

test('App renders correctly ', () => {
  const app = render(<App />);
});

test('Start initial count to 0', () => {
  const app = render(<App />);
  // app.getByText("Char count: 0")
  expect(app.container).toHaveTextContent("Char count: 0");
});

test('Check counter adding nothing in input', () => {
  const app = render(<App />);
  const buttonApp = app.getByText("Append");
  const inputText = app.getByPlaceholderText("New values...");
  fireEvent.change(inputText, {target: {value: ""}});
  fireEvent.click(buttonApp);

  expect(app.container).toHaveTextContent("Char count: 0");
});


test('Click append & check the counter method', () => {
  const app = render(<App />);
  
  const buttonApp = app.getByText("Append");
  const inputText = app.getByPlaceholderText("New values...");

  fireEvent.change(inputText, {target: {value: "test"}});
  fireEvent.click(buttonApp);
  expect(app.container).toHaveTextContent("Char count: 1");

  fireEvent.change(inputText, {target: {value: "hello"}});
  fireEvent.click(buttonApp);
  expect(app.container).toHaveTextContent("Char count: 2");
});


