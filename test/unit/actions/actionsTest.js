import expect from 'expect'
import * as actions from '../../../client/actions/actions';

describe ('Apex Swipe actions', () => {
	it ('searchTerm should create SEARCH_TERM action', () => {
		expect(actions.searchTerm('Pizza')).toEqual({
			type: 'SEARCH_TERM',
			term: 'Pizza'
		});
	});

	it ('searchLocation should create SEARCH_LOCATION action', () => {
		expect(actions.searchLocation('Shanghai')).toEqual({
			type: 'SEARCH_LOCATION',
			location: 'Shanghai'
		});
	});

	it ('resetSearch should create RESET_SEARCH action', () => {
		expect(actions.resetSearch()).toEqual({
			type: 'RESET_SEARCH'
		});
	});

	it ('buildDeckYelp should create BUILD_DECK_YELP action', () => {
		expect(actions.buildDeckYelp({data: "goes here"})).toEqual({
			type: 'BUILD_DECK_YELP',
			yelpData: {data: "goes here"}
		});
	});

	it ('changeCard should create NEXT_CARD action', () => {
		expect(actions.nextCard()).toEqual({
			type: 'NEXT_CARD'
		});
	});

	it ('prevCard should create PREV_CARD action', () => {
		expect(actions.prevCard()).toEqual({
			type: 'PREV_CARD'
		});
	});

	it ('toggleLikeTrue should create TOGGLE_LIKE_TRUE action', () => {
		expect(actions.toggleLikeTrue(77)).toEqual({
			type: 'TOGGLE_LIKE_TRUE',
			id: 77
		});
	});

	it ('toggleLikeFalse should create TOGGLE_LIKE_FALSE action', () => {
		expect(actions.toggleLikeFalse(77)).toEqual({
			type: 'TOGGLE_LIKE_FALSE',
			id: 77
		});
	});

	it ('addFriend should create ADD_FRIEND action', () => {
		expect(actions.addFriend([{userid:123}], '1321897')).toEqual({
			type: 'ADD_FRIEND',
			users: [{userid:123}],
			id: '1321897'
		});
	});

});


