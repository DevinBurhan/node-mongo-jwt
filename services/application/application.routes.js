const controller = require('./application.controller');
const router = require("express").Router();
const { guard } = require('../../helper');



/*
 *  Add New Application
 */
router.post(
    "/add",
    controller.create
);


module.exports = router