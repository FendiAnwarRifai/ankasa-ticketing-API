const express = require('express')
const router = express.Router()
const ticketControllers = require('../controllers/ticketControllers')
const { uploadMulter } = require('../middlewares/upload')

router.get('/search-ticket', ticketControllers.searchTicket)
router.get('/filter', ticketControllers.filter)
router.get('/detail/:id', ticketControllers.detail)
router.get('/transaction', ticketControllers.transaction)
router.post('/create', uploadMulter.single('images'), ticketControllers.create)

module.exports = router