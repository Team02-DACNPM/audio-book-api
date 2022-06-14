const PaymentService = require('../../applicationCore/services/payment.service');

class PaymentController {
    // [POST] /payment/
    async create(req, res) {
        const paymentService = new PaymentService();
        const user = req.user._id;
        const books = req.body.books;
        const paymentName = req.body.paymentName;
        const total = req.body.total;

        return res.send(await paymentService.create(user, books, paymentName, total));
    }

    // [GET] /payment/
    async findAll(req, res) {
        const paymentService = new PaymentService();

        return res.send(await paymentService.findAll());
    }
}
module.exports = new PaymentController();
