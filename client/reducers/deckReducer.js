export default (state = [], action) => {
  switch (action.type) {
    case 'BUILD_DECK_YELP':
      return [
        ...action.yelpData
      ]
    case 'TOGGLE_LIKE_TRUE':
      return Array.prototype.map.call(state,card =>{
        if(card.id !== action.id){
          return card;
        }
        return {
          ...card,
          liked: true
        };
      })
    case 'TOGGLE_LIKE_FALSE':
      return Array.prototype.map.call(state,card =>{
        if(card.id !== action.id){
          return card;
        }
        return {
          ...card,
          liked: false
        };
      })

    default:
      return state
  }
};