import expect from 'expect';
import df from 'deep-freeze-strict';
import searchReducer from '../../../client/reducers/searchReducer';
import buildDeckReducer from '../../../client/reducers/buildDeckReducer';
import changeCardReducer from '../../../client/reducers/changeCardReducer';
// import toggleLikeReducer from '../../../client/reducers/toggleLikeReducer';

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
  
  describe('buildDeckReducer', () => {
    
    // sample data
    const sampleData = [
      {
        name: 'Craft',
        image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/R2UOk6I-VFTHueU0FOCD5Q/ms.jpg", 
        mobile_url: "http://m.yelp.com/biz/craft-los-angeles?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=M4AdD43rFrwW8bBM84G3cw", 
        rating: 4.0,
        rating_img_url_large: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png", 
        review_count: 1415, 
        like: false
      }
    ]
    
    it('should build a new deck', () => {
      const action = {
        type: 'BUILD_DECK',
        yelpData: [
          ...sampleData
        ]
      };
      
      const state = buildDeckReducer(df([]), df(action));
      expect(state.length).toEqual(1);
      expect(state[0].name).toEqual(action.yelpData[0].name);
      expect(state[0].review_count).toEqual(action.yelpData[0].review_count);
    });
    
    xit('should toggle a card\'s LIKE', () => {
      const action = {
        type: 'TOGGLE_LIKE',
        currentCard: 0
      };
      
      const state = buildDeckReducer(df(sampleData), df(action));
      expect(state[0].like).toEqual(true);
    });
  });
  
  describe('changeCardReducer', () => {
    it('should update the current Card', () => {
      const action = {
        type: 'CHANGE_CARD',
      };
      
      const state = changeCardReducer(df(0), df(action));
      expect(state).toEqual(1);
    });
  });
  
})