var express = require('express');
var router = express.Router();
const bookmarkController = require('../controllers/bookmark.controller');
const authenticate = require('../../authenticate');

router.post('/', authenticate.verifyUser, bookmarkController.create);
router.get('/', authenticate.verifyUser, bookmarkController.findAll);
router.get('/:bookId', authenticate.verifyUser, bookmarkController.find);
router.delete('/:bookId', authenticate.verifyUser, bookmarkController.delete);
module.exports = router;
