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

    it('Shallow rendering', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render a <View />', () => {
      expect(wrapper.find('View')).toHaveLength(1);
    });

    it('should add two numbers', () => {
      expect(add(1, 1)).toEqual(2);
    });

    //Test class internal functions
    it('should add two numbers', () => {
      //NOTE:- Here wrapper must be React element other wise instance() function  will return null
      expect(wrapper.instance().internalAdd(1, 1)).toEqual(2);
    });
    
    it('has state', () => {
      expect(wrapper.state('test')).toBe(false);
    });

    // //For negative test case
    // it('has state', () => {
    //   expect(wrapper.state('test')).toBe(true);
    // });

    //Update here  
    //after update this TestCase will be true
    it ('update state',() => {
      wrapper.instance().changeTest(true)
      expect(wrapper.state('test')).toBe(true);

    })

  });
});


