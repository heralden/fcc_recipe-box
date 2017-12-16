import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Recipe from './Recipe';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should add a new recipe when clicking the button', () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find('button');
  button.simulate('click');

  expect(wrapper.find(Recipe)).toHaveLength(2);
});

it('should update an existing recipe', () => {
  const wrapper = mount(<App />);
  const textarea = wrapper.find('textarea');
  textarea.simulate('change', { target: { value: "foobar" } });
  const button = wrapper.find('.Icon-button').first();
  button.simulate('click');

  expect(wrapper.find('p').at(1).text()).toBe("foobar");
});

it('should delete an existing recipe', () => {
  const wrapper = mount(<App />);
  const div = wrapper.find('#Recipe-1');
  div.simulate('click');
  const button = wrapper.find('.Icon-button').at(2);
  button.simulate('click');

  expect(wrapper.find(Recipe)).toHaveLength(1);
});
