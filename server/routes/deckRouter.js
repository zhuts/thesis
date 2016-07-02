var express = require('express');
var router = express.Router();
var handlers = require('../util/handlers');

router.get('/:user_id', handlers.getDecks);
router.get('/shared/:user_id', handlers.getSharedDecks);
router.post('/', handlers.addDeck);
router.put('/:id', handlers.updateOneCard);
router.put('/shared/:id', handlers.updateDeckSwiped);
router.delete('/:id', handlers.deleteOneDeck);

module.exports = router;