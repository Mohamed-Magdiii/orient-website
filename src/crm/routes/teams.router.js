const { authMiddleware,validationMiddleware ,validationPathMiddleware} = require('./middlewares');

const router = require('express').Router();
const ctr =  require('../controllers').TeamsController
const {teamsValidations} = require('./validations')
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const path = 'uploads/';
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    cb(null, path);
  },
  filename(req, file, cb) {
    cb(null, `asset_${Date.now()}_${file.originalname}`);
  },
});

const upload = multer(
  {
    dest: 'uploads/',
    storage,
  },
);
const multerMw = upload.single('image');
//add product for individuals
router.post('/', authMiddleware, validationMiddleware(teamsValidations.create),multerMw,  ctr.createRecord)



router.delete('/:id', authMiddleware,  ctr.deleteRecord)


// router.patch('/:id' , authMiddleware,  ctr.updateRecord)



module.exports = router;