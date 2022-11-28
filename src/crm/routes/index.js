const express = require('express');

const authRouter = require('./auth');

const roleRouter = require('./role.router');
const userRouter = require('./user.router');

const bankAccountRouter = require('./bank-account.router');

const productsRouter = require('./products.router');
const subProductsRouter = require('./subProducts.router');
const requestRouter = require('./request.router');
const teamsRouter = require('./teams.router');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/roles', roleRouter);
router.use('/users', userRouter);

// customer routes
router.use('/bank-accounts', bankAccountRouter);
router.use('/requests', requestRouter);
router.use('/products' , productsRouter )
router.use('/sub-products' , subProductsRouter )
router.use('/teams' , teamsRouter )

module.exports = (app) => {
  app.use('/api/v1/crm', router);
};
