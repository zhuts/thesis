import expect from 'expect';
import df from 'deep-freeze-strict';
import searchReducer from '../../../client/reducers/searchReducer';
import deckReducer from '../../../client/reducers/deckReducer';
import currentCardReducer from '../../../client/reducers/currentCardReducer';
import friendsReducer from '../../../client/reducers/friendsReducer';

describe('Reducers', () => {
  
  describe('searchReducer', () => {
    it('should update the search term', () => {
      const action = {                           
        type: 'SEARCH_TERM',
        term: 'taco'
      };
      
      const state = searchReducer(df({term: '', location: ''}), df(action));
      expect(state.term).toEqual(action.term);
    });
    
    it('should update the location', () => {
      const action = {                           
        type: 'SEARCH_LOCATION',
        term: 'Los Angeles'
      };
      
      const state = searchReducer(df({term: '', location: ''}), df(action));
      expect(state.location).toEqual(action.location);
    });
    
    it('should reset all search parameters', () => {
      const action = {                           
        type: 'RESET_SEARCH'
      };
      
      const state = searchReducer(df({term: 'taco', location: 'Los Angeles'}), df(action));
      expect(state.term).toEqual('');
      expect(state.location).toEqual('');
    });
  });
  
  describe('deckReducer', () => {
    
    // sample data
    const sampleData = [
      {
        name: 'Craft',
        image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/R2UOk6I-VFTHueU0FOCD5Q/ms.jpg", 
        mobile_url: "http://m.yelp.com/biz/craft-los-angeles?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=M4AdD43rFrwW8bBM84G3cw", 
        rating: 4.0,
        rating_img_url_large: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png", 
        review_count: 1415, 
        liked: false
      }
    ]
    
    it('should build a new Yelp deck', () => {
      const action = {
        type: 'BUILD_DECK_YELP',
        yelpData: [
          ...sampleData
        ]
      };
      
      const state = deckReducer(df([]), df(action));
      expect(state.length).toEqual(1);
      expect(state[0].name).toEqual(action.yelpData[0].name);
      expect(state[0].review_count).toEqual(action.yelpData[0].review_count);
    });

    it('should toggle current card\'s liked property to true within the current deck', () => {
      const stateBefore = [
        {id: 1, liked: false},
        {id: 2, liked: false},
        {id: 3, liked: false}
      ];

      const action = {
        type: 'TOGGLE_LIKE_TRUE',
        id: 2
      };
      
      const stateAfter = [    
        {id: 1, liked: false},
        {id: 2, liked: true},
        {id: 3, liked: false}
      ];

      df(stateBefore);
      expect(deckReducer(stateBefore, action)).toEqual(stateAfter);
    });

    it('should toggle current card\'s liked property to true within the current deck', () => {
      const stateBefore = [
        {id: 1, liked: true},
        {id: 2, liked: true},
        {id: 3, liked: true}
      ];

      const action = {
        type: 'TOGGLE_LIKE_FALSE',
        id: 2
      };
      
      const stateAfter = [    
        {id: 1, liked: true},
        {id: 2, liked: false},
        {id: 3, liked: true}
      ];

      df(stateBefore);
      expect(deckReducer(stateBefore, action)).toEqual(stateAfter);
    });
  });

  describe('currentCardReducer', () => {
    it('should go to the next card', () => {
      const stateBefore = 0;
      const action = {
        type: 'NEXT_CARD'
      };
      const stateAfter = 1;

      df(stateBefore);
      expect(currentCardReducer(stateBefore, action)).toEqual(stateAfter);
    });
    it('should go to the previous card', () => {
      const stateBefore = 1;
      const action = {
        type: 'PREV_CARD'
      };
      const stateAfter = 0;
      
      df(stateBefore);
      expect(currentCardReducer(stateBefore, action)).toEqual(stateAfter);
    });
  });

  describe('friendsReducer', () => {
    it('should add a friend', () => {
      const beforeState = [];
      const action = {
        type: 'ADD_FRIEND',
        users: [{email: '123@example.com', user_id: '123'}, { email: '456@example.com', user_id: '456' }],
        id: '456'
      };
      
      const afterState = [ { email: '456@example.com', user_id: '456' } ];
      df(beforeState);
      expect(friendsReducer(beforeState, action)).toEqual(afterState);
    });
  });
  
})