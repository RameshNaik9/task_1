const db = require('../db/dbconfig');

// Function to get countries
exports.getCountries = (req, res) => {
  const sql = 'SELECT id, countryName FROM countries';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      throw err;
    }
    res.json(results);
  });
};

// Function to get states by countryId
exports.getStates = (req, res) => {
    const countryId = req.params.countryId;
    const sql = 'SELECT id, stateName FROM states WHERE countryId = ?';
    db.query(sql, [countryId], (err, results) => {
        if (err) {
            res.status(500).send('Server error');
            throw err;
        }
        res.json(results);
    });
};

// Function to get cities by stateId
exports.getCities = (req, res) => {
    const { countryId, stateId } = req.params; 
    const sql = 'SELECT id, cityName FROM cities WHERE stateId = ?';
    db.query(sql, [stateId], (err, results) => {
        if (err) {
            res.status(500).send('Server error');
            throw err;
        }
        res.json(results);
    });
};