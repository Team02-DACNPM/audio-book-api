const Bookmark = require('../../applicationData/entities/bookmark');
const ServiceResult = require('../common/serviceResult');
const { CREATE, READ_MANY, READ_ONE, NOT_FOUND, DELETE } = require('../common/applicationConstant');
const { loggingEvent } = require('../common/myUltility');

module.exports = class BookmarkService {
    async create(userId, bookId) {
        const bookmark = new Bookmark({
            userId,
            bookId,
        });
        await bookmark.save();
        loggingEvent(bookmark, 'CREATE', 'BOOKMARK', true, bookmark._id, userId, '', bookmark);

        return new ServiceResult(true, CREATE, { bookmark });
    }

    async findAll(userId) {
        const bookmarks = await Bookmark.find({ userId }).populate('bookId');

        loggingEvent(bookmarks, 'READ_MANY', 'BOOKMARK', true, null, null, '', null);

        return new ServiceResult(true, READ_MANY, bookmarks);
    }

    async find(userId, bookId) {
        const bookmark = await Bookmark.findOne({ userId, bookId });
        if (!bookmark) {
            loggingEvent(bookmark, 'READ_ONE', 'BOOKMARK', false, null, null, '404', null);
            return new ServiceResult(false, NOT_FOUND);
        }

        loggingEvent(bookmark, 'READ_ONE', 'BOOKMARK', true, null, null, '', null);

        return new ServiceResult(true, READ_ONE, bookmark);
    }

    async delete(userId, bookId) {
        const bookmark = await Bookmark.findOne({ userId, bookId });
        if (!bookmark) {
            loggingEvent(bookmark, 'DELETE', 'BOOKMARK', false, null, null, '404', null);
            return new ServiceResult(false, NOT_FOUND);
        }

        await bookmark.remove();
        loggingEvent(bookmark, 'DELETE', 'BOOKMARK', true, null, null, '', null);
        return new ServiceResult(true, DELETE);
    }
};
