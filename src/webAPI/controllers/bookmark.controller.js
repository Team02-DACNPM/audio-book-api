const BookmarkService = require('../../applicationCore/services/bookmark.service');

class BookmarkController {
    // [POST] /bookmark/
    async create(req, res) {
        const bookmarkService = new BookmarkService();
        const userId = req.user._id;
        const bookId = req.body.bookId;

        return res.send(await bookmarkService.create(userId, bookId));
    }

    // [GET] /bookmark/
    async findAll(req, res) {
        const bookmarkService = new BookmarkService();
        const userId = req.user._id;
        return res.send(await bookmarkService.findAll(userId));
    }

    // [GET] /bookmark/bookId
    async find(req, res) {
        const bookmarkService = new BookmarkService();
        const userId = req.user._id;
        const bookId = req.params.bookId;
        return res.send(await bookmarkService.find(userId, bookId));
    }

    // [DELETE] /bookmark/bookId
    async delete(req, res) {
        const bookmarkService = new BookmarkService();
        const userId = req.user._id;
        const bookId = req.params.bookId;
        return res.send(await bookmarkService.delete(userId, bookId));
    }
}
module.exports = new BookmarkController();
