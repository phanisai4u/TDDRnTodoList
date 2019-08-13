/**
 * @format
 */

import 'react-native';
import React from 'react';
import App,{add} from '../App';
import { shallow } from 'enzyme';

const createTestProps = (props: object) => ({
  ...props,
});

describe('App', () => {
  const props = createTestProps({});
  const wrapper = shallow<App>(<App {...props} />);

  describe('rendering', () => {

    it('should render a <View />', () => {
      expect(wrapper.find('View')).toHaveLength(1);
    });

    it('should add two numbers', () => {
      expect(add(1, 1)).toEqual(2);
    });
    
  });
});


