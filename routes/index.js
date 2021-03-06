'use strict';

const express = require('express'),
    router = express.Router();

router.get('/', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Home',
            heading: 'Archer',
            subhead: 'An accurate point in the right direction.',
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            body: 'partials/home',
        },
    })
});

module.exports = router;