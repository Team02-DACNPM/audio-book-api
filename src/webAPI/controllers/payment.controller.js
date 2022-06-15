const PaymentService = require('../../applicationCore/services/payment.service');

class PaymentController {
    // [POST] /payment/
    async create(req, res) {
        const paymentService = new PaymentService();
        const userId = req.user._id;
        const books = req.body.books;
        const paymentName = req.body.paymentName;
        const total = req.body.total;

        return res.send(await paymentService.create(userId, books, paymentName, total));
    }

    // [GET] /payment/
    async findAll(req, res) {
        const paymentService = new PaymentService();
        const userId = req.user._id;

        return res.send(await paymentService.findAll(userId));
    }

    // [GET] /payment/bookId
    async find(req, res) {
        const paymentService = new PaymentService();
        const userId = req.user._id;
        const bookId = req.params.bookId;
        return res.send(await paymentService.find(userId, bookId));
    }
}
module.exports = new PaymentController();
