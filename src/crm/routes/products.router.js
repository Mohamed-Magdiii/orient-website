const { authMiddleware,validationMiddleware } = require('./middlewares');

const router = require('express').Router();
const ctr =  require('../controllers').ProductsController
const {create} = require('./validations').productsValidations

//add product for individuals
router.post('/', authMiddleware, validationMiddleware(create),  ctr.createRecord)


router.patch('/:id' , authMiddleware,  ctr.updateRecord)

router.delete('/:id' , authMiddleware,  ctr.deleteRecord)


module.exports = router;