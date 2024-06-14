const exprees=require('express');
const { getallbooks, addbook, updatebooksdetails, deletebook, getbook } = require('../controllers/bookstorecontroller');
const router=exprees.Router();

router.route('/getallbooks').get(getallbooks);
router.route('/addbooks').post(addbook);
router.route('/updatebook/:id').put(updatebooksdetails);
router.route('/deletebook/:id').delete(deletebook);
router.route('/getbook/:id').get(getbook);
module.exports=router