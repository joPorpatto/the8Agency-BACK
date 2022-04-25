const {Router} = require('express');
const router = Router()
const {postForm,getForm} = require('../controllers/form');
const {check}= require('express-validator')

router.get('/',getForm); 
router.post('/',
 [
  check( 'name', 'El nombre es obligatorio').not().isEmpty(),
  check( 'surname', 'El apellido es obligatorio').not().isEmpty(),
  check( 'email', 'El correo es obligatorio').not().isEmpty(),
  check( 'country', 'El país es obligatorio').not().isEmpty(),
  check( 'phone', 'El teléfono es obligatorio').not().isEmpty(),
  check( 'job', 'El puesto es obligatorio').not().isEmpty(),
 ] ,
    postForm);



module.exports = router;