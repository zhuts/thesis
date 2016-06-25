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

	it ('buildDeck should create BUILD_DECK action', () => {
		expect(actions.buildDeck({data: "goes here"})).toEqual({
			type: 'BUILD_DECK',
			yelpData: {data: "goes here"}
		});
	});

	it ('changeCard should create CHANGE_CARD action', () => {
		expect(actions.changeCard(99)).toEqual({
			type: 'CHANGE_CARD',
			id: 99
		});
	});

	it ('toggleLike should create TOGGLE_LIKE action', () => {
		expect(actions.toggleLike(77, true)).toEqual({
			type: 'TOGGLE_LIKE',
			id: 77,
			liked: true
		});
	});
});


