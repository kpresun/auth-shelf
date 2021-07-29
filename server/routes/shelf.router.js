const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated
} = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "item";`;
  pool.query(queryText)
  .then(response => {
    console.log('inside router get:', response);
    res.send(response.rows);
  })
  .catch(error => {
    console.log('error retrieving items:', error);
    res.sendStatus(500);
  })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(req.user);
  const query = `
  INSERT INTO item (description, image_url, user_id)
  VALUES ($1, $2, $3)
  RETURNING id;
  `;
  pool.query(query, [req.body.description, req.body.image_url, req.user.id])
  .then (dbResponse => {
    console.log('New shelf item:', dbResponse.rows);
    res.sendStatus(201);
  })
  .catch( err => {
    console.log('Error posting new shelf item', err);
  })
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
