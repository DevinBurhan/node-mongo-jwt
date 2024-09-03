const router = require("express").Router();
const Controller = require('./question_ans.controller');
const { guard } = require('../../helper');

/*
 *  Add Question Ans
 */
router.post(
    "/add",
    guard.isAuthorized(['organizer']),
    Controller.add
);

/*
 *  List Question Ans
 */
router.post(
    "/list",
    guard.isAuthorized(['admin', 'organizer']),
    Controller.list
);

/*
 *  Get Question Ans By Id
 */
router.get(
    "/get/:id",
    guard.isAuthorized(['admin', 'organizer']),
    Controller.get
);


module.exports = router;