import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import DeckView from '../../client/components/deck_view';
import { expect } from 'chai';

describe('<deckView />', () => {
  it('should render the deck view', () => {
    let wrapper = shallow(<deckView />);
    expect(wrapper.length).to.equal(1);
  });
});