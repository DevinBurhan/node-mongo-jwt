const router = require("express").Router();
const Controller = require('./players.controller');
const { guard } = require('../../helper');

/*
 *  Create Players
 */
router.post(
    "/create",
    guard.isAuthorized(['admin', 'organizer']),
    Controller.create
);

/*
 *  List Players
 */
router.post(
    "/list",
    guard.isAuthorized(['admin', 'organizer']),
    Controller.list
);

/*
 *  Get Players By Id
 */
router.get(
    "/get/:id",
    guard.isAuthorized(['admin', 'organizer', 'player']),
    Controller.GetById
);

/*
 *  update Players By Id
 */
router.patch(
    "/update/:id",
    guard.isAuthorized(['admin', 'organizer']),
    Controller.update
);

/*
 *  Delete Players By Id
 */
router.delete(
    "/delete/:id",
    guard.isAuthorized(['admin', 'organizer']),
    Controller.delete
);


module.exports = router;