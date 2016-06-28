var express = require('express');
var router = express.Router();
var controller = require('../db/controllers/deckController')

router.get('/:userid', controller.getDecks);
router.get('/shared/:userid', controller.getSharedDecks);
router.post('/', controller.addDeck);
router.put('/:id', controller.updateOneDeck);
router.delete('/:id', controller.deleteOneDeck);

module.exports = router;