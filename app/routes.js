'use strict';

const Router = require('koa-router');
const homeController = require('./controllers/home');


const router = new Router();
router.get('/', homeController.getPoll);
router.get('/poll/user/:userId', homeController.getUserPollsInfo);
router.post('/create', homeController.makePoll);
router.post('/poll/:pollId', homeController.vote);

module.exports = router;
