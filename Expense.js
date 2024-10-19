const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    participants: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, amountOwed: Number }],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Expense', expenseSchema);
