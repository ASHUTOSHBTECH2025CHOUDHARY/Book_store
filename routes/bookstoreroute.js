const exprees=require('express');
const { respond } = require('../controllers/bookstorecontroller');
const router=exprees.Router();

router.route('/').get(respond)

module.exports=router