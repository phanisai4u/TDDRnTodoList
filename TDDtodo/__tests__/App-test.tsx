/**
 * @format
 */


 import 'react-native';

import React from 'react';

import { shallow } from 'enzyme';

import App,{add, MyChildCom} from '../App';
import { TextInput, Button } from 'react-native';


const createTestProps = (props: object) => ({
  ...props,
  test:false,
  text:''
});

describe('App', () => {
  const props = createTestProps({});
  const wrapper = shallow<App>(<App {...props} />);
  const Child = shallow<App>(<MyChildCom text={"Child"} />);
  const Child2 = shallow<App>(<MyChildCom  />);



  describe('rendering', () => {

    it('Shallow rendering', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('Child Shallow rendering', () => {
      expect(Child).toMatchSnapshot()
    })

    it('Child for else Shallow rendering', () => {
      expect(Child2).toMatchSnapshot()
    })


    it('should render a <View />', () => {
      expect(wrapper.find('View')).toHaveLength(1);
    });

    // it('should add two numbers', () => {
    //   expect(add(1, 1)).toEqual(2);
    // });

    //Test class internal functions
    it('should add two numbers', () => {
      //NOTE:- Here wrapper must be React element other wise instance() function  will return null
      expect(wrapper.instance().internalAdd(1, 1)).toEqual(2);
    });
    
    // it('has state', () => {
    //   expect(wrapper.state('test')).toBe(false);
    // });

    // //For negative test case for failure
    // it('has state', () => {
    //   expect(wrapper.state('test')).toBe(true);
    // });

    //Update here  
    //after update this TestCase will be true
    it ('update state',() => {
      wrapper.instance().changeTest(true)
      expect(wrapper.state('test')).toBe(true);
    })

    // it ('update test input text',() => {
    //   wrapper.instance().changeTest(false)


    //   expect(wrapper.find('TextInput')).toHaveLength(2);
    //   wrapper.find('TextInput').at(0).simulate('changeText','Hello')
    //   expect(wrapper.state('text')).toBe('Hello');
    // })

    // it ('update test Button Press',() => {
    //   wrapper.instance().changeTest(false)
    //   wrapper.find(Button).at(0).simulate('press')
    //   expect(wrapper.state('text')).toBe('ButtonPressed');
    // })


    // it ('update Child component events',() => {
    //   wrapper.instance().changeTest(false)
    //   expect(wrapper.find('MyChildCom')).toHaveLength(1);
    //   console.log( wrapper.find('MyChildCom').at(0).debug())
    //   wrapper.find('MyChildCom').at(0).props().handleButtonPress()
    //   expect(wrapper.state('text')).toBe('ChildButtonPressed');
    // })

  });
});


