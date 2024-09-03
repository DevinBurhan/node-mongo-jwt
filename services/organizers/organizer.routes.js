const router = require("express").Router();
const Controller = require("./organizers.controller");
const { guard } = require('../../helper');

/*
 *  User List
 */
// router.post(
//     "/players-list",
//     guard.isAuthorized(['admin', 'organizer']),
//     Controller.playersList
// );

module.exports = router 