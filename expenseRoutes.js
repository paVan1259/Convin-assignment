const express = require('express');
const Expense = require('../models/Expense');
const router = express.Router();

// Add an expense
router.post('/add', async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Retrieve individual user expenses
router.get('/user/:userId', async (req, res) => {
    try {
        const expenses = await Expense.find({ 'participants.userId': req.params.userId });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Retrieve overall expenses
router.get('/overall', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Download balance sheet (for demonstration, returns all expenses)
router.get('/download/balance-sheet', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses); // This can be enhanced to generate a downloadable file
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
