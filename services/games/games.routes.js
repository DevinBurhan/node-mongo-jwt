const router = require("express").Router();
const Controller = require("./games.controller");
const { guard } = require('../../helper');

/*
 *  Create New Game
 */
router.post(
    "/create",
    guard.isAuthorized(['admin', 'organizer']),
    Controller.create
);

/*
 *  List All Games
 */
router.post(
    "/list",
    guard.isAuthorized(['admin', 'organizer']),
    Controller.list
);

/*
 *  Get By Id
 */
router.get(
    "/get/:id",
    guard.isAuthorized(['admin', 'organizer', 'player']),
    Controller.getById
);
/*
 *  Get By Id
 */
router.get(
    "/get",
    // guard.isAuthorized(['admin', 'organizer', 'player']),
    Controller.get
);

/*
 *  update By Id
 */
router.patch(
    "/update/:id",
    guard.isAuthorized(['admin', 'organizer']),
    Controller.update
);

/*
 *  Delete
 */
router.delete(
    "/delete/:id",
    guard.isAuthorized(['admin', 'organizer']),
    Controller.delete
);


module.exports = router;