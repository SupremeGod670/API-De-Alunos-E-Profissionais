const express = require('express')
const router = express.Router()
const studentsRoutes = require('./studentsRoutes')
const professionalsRoutes = require('./professionalsRoutes')

router.use(express.json())
router.use('/students', studentsRoutes)
router.use('/professionals', professionalsRoutes)

module.exports = router