const router = require('express').Router({strict: true});

const catchAsync = require('../../../middlewares/catch');
const { healthyCheck } = require('../../controllers');

router.get('/healthy-check', catchAsync(healthyCheck));

module.exports = router;
