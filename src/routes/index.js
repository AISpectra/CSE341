const express = require('express');
const router = express.Router();
const { connectDB } = require('../db/mongo');

router.get('/', (req, res) => {
  res.json({ status: 'API running' });
});

router.get('/headers', (req, res) => {
  res.json({
    userAgent: req.headers['user-agent']
  });
});

router.get('/search', (req, res) => {
  res.json({
    query: req.query
  });
});

router.get('/contacts', async (req, res) => {
  const db = await connectDB();
  const contacts = await db.collection('contacts').find().toArray();
  res.json(contacts);
});

module.exports = router;
