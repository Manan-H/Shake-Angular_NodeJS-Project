/**
 * Created by tigra on 07-Nov-18.
 */
const express = require("express");
const routes = express.Router();

const mainController = require("../controller/main");
const homeController = require("../controller/home");
const aboutUsController = require("../controller/aboutus");
const benefactorsController = require("../controller/benefactors");
const volunteersController = require("../controller/volunteers");
const contactusController = require("../controller/contactus");

const messagesController = require('../controller/messages');

routes.get('/', mainController.getData);
routes.post('/', mainController.setData);

routes.get('/home', homeController.getData);
routes.get('/aboutus', aboutUsController.getData);
routes.get('/benefactors', benefactorsController.getData);
routes.get('/volunteers', volunteersController.getData);

routes.get('/contactus', contactusController.getData);
routes.post('/contactus', contactusController.setData);

routes.get('/messages', messagesController.getData);

module.exports = routes;