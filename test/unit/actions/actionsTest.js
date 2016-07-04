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
			index: 77
		});
	});

	it ('toggleLikeFalse should create TOGGLE_LIKE_FALSE action', () => {
		expect(actions.toggleLikeFalse(77)).toEqual({
			type: 'TOGGLE_LIKE_FALSE',
			index: 77
		});
	});

	it ('addFriend should create ADD_FRIEND action', () => {
		expect(actions.addFriend([{userid:123}], '1321897')).toEqual({
			type: 'ADD_FRIEND',
			users: [{userid:123}],
			id: '1321897'
		});
	});
	
	it ('setUserDecks should create SET_USER_DECKS action', () => {
		const userDecks = [
			{
	      user_id: '22222',
	      name: 'Dresses',
	      deck: [ 
	        {
	          name: 'Dress 1',
	          imageUrl: 'http://www.example.com/3',
	          likes: 0
	        }
	      ],
	      shared: []
	    }
	  ];
	  
		expect(actions.setUserDecks(userDecks)).toEqual({
			type: 'SET_USER_DECKS',
			userDecks
		})
	});
	
	it ('setSharedDecks should create SET_SHARED_DECKS action', () => {
		const sharedDecks = [
			{
	      user_id: '22222',
	      name: 'Dresses',
	      deck: [ 
	        {
	          name: 'Dress 1',
	          imageUrl: 'http://www.example.com/3',
	          likes: 0
	        }
	      ],
	      shared: []
	    }
	  ];
	  
		expect(actions.setSharedDecks(sharedDecks)).toEqual({
			type: 'SET_SHARED_DECKS',
			sharedDecks
		})
	});
	
	it ('setCurrentViewDeck should create SET_CURRENT_VIEW_DECK action', () => {
		const currentViewDeck = {
      user_id: '22222',
      name: 'Dresses',
      deck: [ 
        {
          name: 'Dress 1',
          imageUrl: 'http://www.example.com/3',
          likes: 0
        }
      ],
      shared: []
    };
	    	  
		expect(actions.setCurrentViewDeck(currentViewDeck)).toEqual({
			type: 'SET_CURRENT_VIEW_DECK',
			currentViewDeck
		})
	});
	
	it ('changeCurrentViewCard should create CHANGE_CURRENT_VIEW_CARD action', () => { 	  
		expect(actions.changeCurrentViewCard()).toEqual({
			type: 'CHANGE_CURRENT_VIEW_CARD'
		})
	});
	
	it ('resetCurrentViewCard should create RESET_CURRENT_VIEW_CARD action', () => { 	  
		expect(actions.resetCurrentViewCard()).toEqual({
			type: 'RESET_CURRENT_VIEW_CARD'
		})
	});

	it ('takePictureSuccess should create TAKE_PICTURE_SUCCESS action', () => {
		expect(actions.takePictureSuccess()).toEqual({
			type: 'TAKE_PICTURE_SUCCESS'
		});
	});

	it ('cameraModeOn should create CAMERA_MODE_ON action', () => {
		expect(actions.cameraModeOn()).toEqual({
			type: 'CAMERA_MODE_ON'
		});
	});

	it ('cameraModeOff should create CAMERA_MODE_OFF action', () => {
		expect(actions.cameraModeOff()).toEqual({
			type: 'CAMERA_MODE_OFF'
		});
	});

	it ('buildImageDeck should create BUILD_IMAGE_DECK action', () => {
		expect(actions.buildImageDeck({data: "goes here"})).toEqual({
			type: 'BUILD_IMAGE_DECK',
			images: {data: "goes here"}
		});
	});

});
