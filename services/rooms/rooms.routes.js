const router = require("express").Router();
const Controller = require('./rooms.controller');
const { guard } = require('../../helper');



/*
 *  Create Rooms
 */
router.post(
    "/create",
    guard.isAuthorized(['admin', 'organizer']),
    Controller.create
);

/*
 *  List Rooms
 */
router.post(
    "/list",
    guard.isAuthorized(['admin', 'organizer']),
    Controller.list
);




module.exports = router
