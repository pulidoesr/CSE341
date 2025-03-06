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
    if (!users || users.length === 0) {
      return res.status(404).json({ error: "No professionals found" });
    }
    res.setHeader("Content-Type", "application/json");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}

module.exports = {route03}
