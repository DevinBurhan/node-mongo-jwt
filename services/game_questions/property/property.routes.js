const controller = require('./property.controller');
const router = require("express").Router();
const { guard } = require('../../helper');
const multerSetting = require("../../helper/multer").propertyImageUpload;



/*
 *  Add New Property
 */
router.post(
    "/add",
    multerSetting,
    guard.isAuthorized([ 'landlord']),
    controller.create
);



/*
 *  Practice To convert and reduce sizes Of image Property
 */
router.post(
    "/convert",
    multerSetting,
    controller.convert
);



/*
 *  List All Property 
 */
router.post(
    "/list",
    guard.isAuthorized([ 'landlord']),
    controller.List
);



/*
 *  Find Property By Address
 */
router.post(
    "/find",
    guard.isAuthorized([ 'landlord']),
    controller.findByAddress
);


/*
 *  Search Tenant By Name
 */
router.get(
    "/search/:add_tenant_name",
    guard.isAuthorized([ 'landlord']),
    controller.Search
);



/*
 *  Get Property By Id
 */
router.get(
    "/get/:id",
    guard.isAuthorized(['landlord']),
    controller.get
);

/*
 *  update Property By Id
 */
router.patch(
    "/update/:id",
    guard.isAuthorized([ 'landlord']),
    controller.update
);


/*
 *  Delete Property By Id
 */
router.delete(
    "/delete/:id",
    guard.isAuthorized([ 'landlord']),
    controller.Delete
);


module.exports = router