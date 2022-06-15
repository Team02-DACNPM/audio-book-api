const Payment = require('../../applicationData/entities/payment');
const ServiceResult = require('../common/serviceResult');
const { CREATE, READ_MANY, NOT_FOUND, READ_ONE } = require('../common/applicationConstant');
const { loggingEvent } = require('../common/myUltility');

module.exports = class PaymentService {
    async create(userId, books, paymentName, total) {
        const payment = new Payment({
            userId,
            books,
            paymentName,
            total,
        });
        await payment.save();
        loggingEvent(payment, 'CREATE', 'PAYMENT', true, payment._id, userId, '', payment);

        return new ServiceResult(true, CREATE, { payment });
    }

    async findAll(userId) {
        const payments = await Payment.find({ userId });

        loggingEvent(payments, 'READ_MANY', 'PAYMENT', true, null, null, '', null);

        return new ServiceResult(true, READ_MANY, payments);
    }

    async find(userId, bookId) {
        const payment = await Payment.findOne({ userId, bookId });
        if (!payment) {
            loggingEvent(payment, 'READ_ONE', 'PAYMENT', false, null, null, '404', null);
            return new ServiceResult(false, NOT_FOUND);
        }

        loggingEvent(payment, 'READ_ONE', 'PAYMENT', true, null, null, '', null);

        return new ServiceResult(true, READ_ONE, payment);
    }
};
