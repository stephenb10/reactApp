var express = require('express')
var router = express.Router()
var pool = require('./db')
const bcrypt = require('bcrypt');

const saltRounds = 10;

router.get('/api/database', (req, res) => {
	pool.query(`SELECT * FROM users`,
		(q_err, q_res) => {
			console.log(q_err)
			if (q_res.rowCount > 0 ){
				res.json(q_res.rows)
			}
			else{
				res.status(204).send();
			}
		})
})


router.post('/api/users', (req, res) => {

	bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
		const values = [req.body.email, hash]
		console.log(values)
		pool.query('INSERT INTO users(email, password) VALUES($1, $2) RETURNING *', values, (q_err, q_res) =>
		{
			if (q_err)
			{
				console.log(q_err)
				res.status(409).json({error: 'Email already exists'});
			}
			else {
				res.json(q_res.rows)
			}
		})
	})
	
})


router.post('/api/login', (req, res) => {
	bcrypt.compare('password', 'hashedpasswordfromdb', (err, result) => {
		// result == true 
		// sign in
	})
})

module.exports = router