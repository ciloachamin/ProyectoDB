const { Router } = require("express");
const { getAllClientes, getCliente, createCliente, deleteCliente, updateCliente, 
    getAllCocineros, getCocinero, createCocinero, deleteCocinero, updateCocinero, 
    getAllMeseros, getMesero, createMesero, deleteMesero, updateMesero, getAllMesas, 
    getMesa, createMesa, deleteMesa, updateMesa, getAllPago,
    getPago, createPago, deletePago, updatePago } = require('../controllers/tasks.controller');
const db = require('../db');

const router = Router();

router.get('/cliente', getAllClientes);

router.get('/cliente/:id', getCliente);

router.post('/cliente', createCliente);

router.delete('/cliente/:id', deleteCliente);

router.put('/cliente/:id', updateCliente);

router.get('/cocinero', getAllCocineros);

router.get('/cocinero/:id', getCocinero);

router.post('/cocinero', createCocinero);

router.delete('/cocinero/:id', deleteCocinero);

router.put('/cocinero/:id', updateCocinero);

router.get('/mesero', getAllMeseros);

router.get('/mesero/:id', getMesero);

router.post('/mesero', createMesero);

router.delete('/mesero/:id', deleteMesero);

router.put('/mesero/:id', updateMesero);

router.get('/mesa', getAllMesas);

router.get('/mesa/:id', getMesa);

router.post('/mesa', createMesa);

router.delete('/mesa/:id', deleteMesa);

router.put('/mesa/:id', updateMesa);

router.get('/pago', getAllPago);

router.get('/pago/:id', getPago);

router.post('/pago', createPago);

router.delete('/pago/:id', deletePago);

router.put('/pago/:id', updatePago);


module.exports = router;
