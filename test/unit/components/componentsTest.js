import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import { expect } from 'chai';


import Card from '../../../client/components/card';

xdescribe('Card', () => {
  it('it should render 2 view component', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find(View)).to.have.length(2);
  });
});