const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/registro', customerController.registro);
router.post('/add', customerController.save);

router.get('/login', customerController.login);
router.post('/loginya', customerController.loginya);

router.get('/loginAdmin',customerController.loginAdmin);
router.post('/loginYaAdmin',customerController.loginAdminYa); 

router.get('/insertar', customerController.insertar);
router.post('/insertarProducto',customerController.ingresar_producto)

router.get('/recuperar', customerController.recuperar);
router.post('/recuperarYa', customerController.recuperarYa);
router.post('/verificarContrasena',customerController.verificar);



router.get('/categorias', customerController.categorias);
router.get('/categoriasAdmin',customerController.categoriasAdmin);
router.get('/catalogo', customerController.catalogo);
router.get('/catalogoAdmin',customerController.catalogoAdmi);
router.get('/select', customerController.selec_us);
// router.get('/ResAd',customerController.registroAdmin);
router.get('/principal_Admin', customerController.principalAdmin);
//router.get('/principal_Usuario', customerController.principalUsuario);

router.get('/', customerController.principal);
module.exports = router;
