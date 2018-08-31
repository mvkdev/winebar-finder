const express = require('express');

router = express.Router();

router.get('/directory', (req,res) => res.render('directory/winebars'));

module.exports = router;