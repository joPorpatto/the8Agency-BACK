const {response} = require('express');
const Usuario = require('../model/Usuario');
const { validationResult } = require('express-validator');

const  getForm = async(req, res = response) => {
  const usuarios = await Usuario.find();
  res.json({
    ok:true,
    usuarios
  })
}
const  postForm = async(req, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
 }

  try {
    const usuario = new Usuario(req.body);
    await usuario.save( );
  
    res.json({
      ok: true,
      msg: 'enviado'
  
    })
    
  } catch (error) {
    res.status(500).json({
      ok:false,
      msg:"Por favor hable con el administrador"
    })
  }
}

module.exports = {
  postForm,
  getForm
};