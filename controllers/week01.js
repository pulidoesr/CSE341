const path = require('path');
const { getDb } = require('../models/connect');

const route01 = (req, res) => {
  res.send('Hello Eduardo Pulido');
}

const route02 = (req, res) => {
  res.send('Hello Rocio Ravello');
};

const route03 = async (req, res) => {
  try {
    const db = getDb().db('mdb_professional'); 
    const users = await db.collection('professionalList').find().toArray();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}

module.exports = {route03}
