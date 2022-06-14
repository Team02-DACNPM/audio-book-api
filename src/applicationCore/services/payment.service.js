const Payment = require('../../applicationData/entities/payment');
const ServiceResult = require('../common/serviceResult');
const { CREATE, READ_MANY } = require('../common/applicationConstant');
const { loggingEvent } = require('../common/myUltility');

module.exports = class PaymentService {
    async create(user, books, paymentName, total) {
        const payment = new Payment({
            user,
            books,
            paymentName,
            total,
        });
        await payment.save();
        loggingEvent(payment, 'CREATE', 'PAYMENT', true, payment._id, user, '', payment);

        return new ServiceResult(true, CREATE, { payment });
    }

    async findAll() {
        const payments = await Payment.find({});

        loggingEvent(payments, 'READ_MANY', 'PAYMENT', true, null, null, '', null);

        return new ServiceResult(true, READ_MANY, payments);
    }
};
