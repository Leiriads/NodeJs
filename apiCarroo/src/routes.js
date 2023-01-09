const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/carController');

//configurando endpoint
router.get('/cars',CarroController.fetch_all);

router.get('/car/:codigo',CarroController.fetch_one);

router.post('/car',CarroController.insert_car);

router.put('/car/:codigo',CarroController.update_car);

router.delete('/car/:codigo',CarroController.delete_car);

module.exports = router;