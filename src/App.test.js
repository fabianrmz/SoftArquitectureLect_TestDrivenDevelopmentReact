import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import React from 'react';
import {prettyDom} from '@testing-library/dom';

//--------------------------------------------- App render correctly
test('App renders correctly ', () => {
  const app = render(<App />);
  expect(app.container).toHaveTextContent("Element count: 0");
});


// ------------------------------------------Tests for getSizeOf 
test('Start initial count to 0', () => {
  const app = render(<App />);
  expect(app.container).toHaveTextContent("Element count: 0");
});

test('Check counter adding nothing in input', () => {
  const app = render(<App />);
  const buttonApp = app.getByText("Append");
  const inputText = app.getByPlaceholderText("New values...");
  fireEvent.change(inputText, {target: {value: ""}});
  fireEvent.click(buttonApp);

  expect(app.container).toHaveTextContent("Element count: 0");
});


test('Click append & check the counter method', () => {
  const app = render(<App />);

  const buttonApp = app.getByText("Append");
  const inputText = app.getByPlaceholderText("New values...");

  fireEvent.change(inputText, {target: {value: "test"}});
  fireEvent.click(buttonApp);
  expect(app.container).toHaveTextContent("Element count: 1");

  fireEvent.change(inputText, {target: {value: "hello"}});
  fireEvent.click(buttonApp);
  expect(app.container).toHaveTextContent("Element count: 2");
});

// ------------------------------------------Tests for clear the list ----------------------------
test('Append data, clear all and append again, result to just 1 item', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const buttonClear = app.getByText("Clear");
  const inputText = app.getByPlaceholderText("New values...");

  fireEvent.change(inputText, {target: {value: "Hello"}});
  fireEvent.click(buttonAppend);
  fireEvent.click(buttonClear);
  fireEvent.change(inputText, {target: {value: "there"}});
  fireEvent.click(buttonAppend);
  expect(app.container).toHaveTextContent("Element count: 1");
});


test('Append various items & clear, then check for the state counter', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const buttonClear = app.getByText("Clear");
  const inputText = app.getByPlaceholderText("New values...");

  fireEvent.change(inputText, {target: {value: "Hello"}});
  fireEvent.click(buttonAppend);
  fireEvent.change(inputText, {target: {value: "there"}});
  fireEvent.click(buttonAppend);
  fireEvent.change(inputText, {target: {value: "yes"}});
  fireEvent.click(buttonAppend);
  fireEvent.change(inputText, {target: {value: "siuuu"}});
  fireEvent.click(buttonAppend);

  expect(app.container).toHaveTextContent("Element count: 4");

  fireEvent.click(buttonClear);
  
  expect(app.container).toHaveTextContent("Element count: 0");
});


test('Append various items & clear, then check for the state counter', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const buttonClear = app.getByText("Clear");
  const inputText = app.getByPlaceholderText("New values...");

  fireEvent.change(inputText, {target: {value: "Hello"}});
  fireEvent.click(buttonAppend);
  fireEvent.change(inputText, {target: {value: "there"}});
  fireEvent.click(buttonAppend);
  fireEvent.change(inputText, {target: {value: "yes"}});
  fireEvent.click(buttonAppend);
  fireEvent.change(inputText, {target: {value: "siuuu"}});
  fireEvent.click(buttonAppend);

  expect(app.container).toHaveTextContent("Element count: 4");

  fireEvent.click(buttonClear);
  
  expect(app.container).toHaveTextContent("Element count: 0");
});


test('Check for clear outputs like "[ ]" and counter after clear', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const buttonClear = app.getByText("Clear");
  const inputText = app.getByPlaceholderText("New values...");

  fireEvent.change(inputText, {target: {value: "Hello"}});
  fireEvent.click(buttonAppend);
  expect(app.container).toHaveTextContent("Element count: 1");
  fireEvent.click(buttonClear);
  expect(app.container).toHaveTextContent("Element count: 0");
  expect(app.container).toHaveTextContent("[ ]");
});

// ------------------------------------------ tests for add Items ----------------------------

test('Add items, and look for them', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const inputText = app.getByPlaceholderText("New values...");

  const newElement = "Hello there"
  fireEvent.change(inputText, {target: {value: newElement}});
  fireEvent.click(buttonAppend);

  expect(app.container).toHaveTextContent(newElement);
  
});

test('Add empty values and check for validation, expect to not having added', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const inputText = app.getByPlaceholderText("New values...");

  const newElement = ""
  fireEvent.change(inputText, {target: {value: newElement}});
  fireEvent.click(buttonAppend);

  expect(app.container).toHaveTextContent("Element count: 0");
});

test('Add items after clear the list, expect to work and count perfectly', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const inputText = app.getByPlaceholderText("New values...");
  const buttonClear = app.getByText("Clear");

  let newElement = "Hello"
  fireEvent.change(inputText, {target: {value: newElement}});
  fireEvent.click(buttonAppend);

  fireEvent.click(buttonClear);

  newElement = "This is a new test"
  fireEvent.change(inputText, {target: {value: newElement}});
  fireEvent.click(buttonAppend);

  newElement = "Will it work?"
  fireEvent.change(inputText, {target: {value: newElement}});
  fireEvent.click(buttonAppend);

  expect(app.container).toHaveTextContent(newElement);
  expect(app.container).toHaveTextContent("Element count: 2");
});


// ------------------------------------------ Check for items exists ----------------------------

test('Check for item exists after append', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const inputText = app.getByPlaceholderText("New values...");

  let newElement = "Hello"
  fireEvent.change(inputText, {target: {value: newElement}});
  fireEvent.click(buttonAppend);

  expect(app.container).toHaveTextContent(newElement);

});


test('Check for random element if exists', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const buttonLookFor = app.getByText("Look for");
  const inputText = app.getByPlaceholderText("New values...");

  
  const newElement = Math.floor(Math.random() * 100);
  fireEvent.change(inputText, {target: {value: newElement}});
  fireEvent.click(buttonAppend);

  fireEvent.change(inputText, {target: {value: newElement}});
  fireEvent.click(buttonLookFor);

  expect(app.container).toHaveTextContent("Alert: \""+newElement+"\" element exists");

});

test('Check for element does not exists', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const buttonLookFor = app.getByText("Look for");
  const inputText = app.getByPlaceholderText("New values...");

  
  
  fireEvent.change(inputText, {target: {value: "Hi there"}});
  fireEvent.click(buttonAppend);


  fireEvent.change(inputText, {target: {value: "What r you doin"}});
  fireEvent.click(buttonAppend);

  fireEvent.change(inputText, {target: {value: "Can i exist"}});
  fireEvent.click(buttonLookFor);

  expect(app.container).toHaveTextContent("Alert: Element doesnt exists");

});

// ------------------------------------------ get elements by index ----------------------------

test('Get second element by index in list', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const buttonElementAt = app.getByText("Element at (index)");
  const inputText = app.getByPlaceholderText("New values...");

  
  
  fireEvent.change(inputText, {target: {value: "First one"}});
  fireEvent.click(buttonAppend);


  fireEvent.change(inputText, {target: {value: "Second one"}});
  fireEvent.click(buttonAppend);

  fireEvent.change(inputText, {target: {value: 1}});
  fireEvent.click(buttonElementAt);

  expect(app.container).toHaveTextContent("Alert: Position of \"Second one\"");

});




test('Look for an element at a index not numeric, expect validation', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const buttonElementAt = app.getByText("Element at (index)");
  const inputText = app.getByPlaceholderText("New values...");

  fireEvent.change(inputText, {target: {value: "First one"}});
  fireEvent.click(buttonAppend);


  fireEvent.change(inputText, {target: {value: "Second one"}});
  fireEvent.click(buttonAppend);

  fireEvent.change(inputText, {target: {value: "not an index"}});
  fireEvent.click(buttonElementAt);

  expect(app.container).toHaveTextContent("Alert: Position not valid or existent");

});


test('Look for an element at a index not yet created', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const buttonElementAt = app.getByText("Element at (index)");
  const inputText = app.getByPlaceholderText("New values...");

  fireEvent.change(inputText, {target: {value: "First one"}});
  fireEvent.click(buttonAppend);


  fireEvent.change(inputText, {target: {value: "Second one"}});
  fireEvent.click(buttonAppend);

  fireEvent.change(inputText, {target: {value: 69420}});
  fireEvent.click(buttonElementAt);

  expect(app.container).toHaveTextContent('Alert: Position of "undefined"');

});
// ------------------------------------------ search the index of an object ----------------------------


test('Get the positon of an object that exists', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const buttonIndexOf = app.getByText("Index Of");
  const inputText = app.getByPlaceholderText("New values...");

  fireEvent.change(inputText, {target: {value: "Any element"}});
  fireEvent.click(buttonAppend);


  fireEvent.change(inputText, {target: {value: "Any element"}});
  fireEvent.click(buttonIndexOf);
  expect(app.container).toHaveTextContent('Alert: "Any element" element exists at position 0');

});

test('Get the positon of an non existent object', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const buttonIndexOf = app.getByText("Index Of");
  const inputText = app.getByPlaceholderText("New values...");

  fireEvent.change(inputText, {target: {value: "Any element"}});
  fireEvent.click(buttonAppend);


  fireEvent.change(inputText, {target: {value: "Any other"}});

  fireEvent.click(buttonIndexOf);
  expect(app.container).toHaveTextContent('Alert: Element not found');

});


test('Get the index after adding different values', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const buttonIndexOf = app.getByText("Index Of");
  const inputText = app.getByPlaceholderText("New values...");

  fireEvent.change(inputText, {target: {value: "First"}});
  fireEvent.click(buttonAppend);
  fireEvent.change(inputText, {target: {value: "Any element"}});
  fireEvent.click(buttonAppend);
  fireEvent.change(inputText, {target: {value: "Any other element"}});
  fireEvent.click(buttonAppend);

  fireEvent.change(inputText, {target: {value: "Any other element"}});
  fireEvent.click(buttonIndexOf);
  expect(app.container).toHaveTextContent('Alert: "Any other element" element exists at position 2');

});






// ------------------------------------------ remove an item by index ----------------------------

test('Delete element and check for count to be 0', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const inputText = app.getByPlaceholderText("New values...");

  fireEvent.change(inputText, {target: {value: "An element"}});
  fireEvent.click(buttonAppend);


  const buttonElementJustCreated = app.getByText("An element");
  fireEvent.click(buttonElementJustCreated);

  
  expect(app.container).toHaveTextContent("Element count: 0");

});


test('Delete element and check if exists', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const inputText = app.getByPlaceholderText("New values...");
  const buttonLookFor = app.getByText("Look for");

  fireEvent.change(inputText, {target: {value: "Any element"}});
  fireEvent.click(buttonAppend);


  const element = app.getByText("Any element");
  fireEvent.click(element);


  fireEvent.change(inputText, {target: {value: "Any element"}});
  fireEvent.click(buttonLookFor);

  
  expect(app.container).toHaveTextContent("Alert: Element doesnt exists");
});


test('Delete element and the second element becomes the first position', () => {
  
  const app = render(<App />);
  const buttonAppend = app.getByText("Append");
  const inputText = app.getByPlaceholderText("New values...");
  const buttonSearchByIndex = app.getByText("Element at (index)");

  fireEvent.change(inputText, {target: {value: "First element"}});
  fireEvent.click(buttonAppend);

  fireEvent.change(inputText, {target: {value: "Second one"}});
  fireEvent.click(buttonAppend);


  const element = app.getByText("First element");
  fireEvent.click(element);


  fireEvent.change(inputText, {target: {value: 0}});
  fireEvent.click(buttonSearchByIndex);

  
  expect(app.container).toHaveTextContent('Alert: Position of "Second one"');
});