/**
 * @format
 */

import 'react-native';
import React from 'react';
import App,{add} from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('should add two numbers', () => {
  expect(add(1, 1)).toEqual(2);
});




