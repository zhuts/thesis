import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import { expect } from 'chai';


import Card from '../../../client/components/card';
import ImageCard from '../../../client/components/imageCard';

describe('Card', () => {
  xit('it should render 1 view component', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find(View)).to.have.length(1);
  });
});

describe('imageCard', () => {
  xit('it should render 1 text component', () => {
    const wrapper = shallow(<ImageCard />);
    expect(wrapper.find(Text)).to.have.length(1);
  });
});
