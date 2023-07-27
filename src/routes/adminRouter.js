import {Router} from 'express'; 
import { getAdmins, getAdmin,  getAdminCount, createAdmin, deleteAdmin, updateAdmin } from '../controllers/AdminController';

const router = Router();

/**
 * @swagger
 * tags:
 * name: Admins
 * description: Admins Endpoint.
 *     
 */


/**
 * @swagger
 * /admins:
 *   get:
 *      summary: obtiene todos los admin.
 *      tags : [Admins]
 * 
 *     
 */


//obtener todos los admins registrados
router.get('/admins', getAdmins)

/**
 * @swagger
 * /admins/:id:
 *   get:
 *      summary: obtiene un admin.
 *      tags : [Admins]
 *       
 * 
 *     
 */

//obtiene un admin registrado
router.get('/admins/:id', getAdmin)




/**
 * @swagger
 * /admins/count:
 *   get:
 *      summary: obtiene la cantidad de registros los admin.
 *      tags : [Admins]   
 * 
 *     
 */

//obtiene la cantidad de admins registrados
router.get('/admins/count', getAdminCount)

/**
 * @swagger
 * /admins:
 *   put:
 *      summary: agrega los admin.
 *      tags : [Admins]   
 * 
 *     
 */

//permite agregar admins
router.post('/admins', createAdmin)

/**
 * @swagger
 * /admins/:id:
 *   delete:
 *      summary: elimina un admin.
 *      tags : [Admins]
 * 
 *     
 */

//permite eliminar admins
router.delete('/admins/:id', deleteAdmin)

/**
 * @swagger
 * /admins/:id:
 *   put:
 *      summary: actualiza los registros admin.
 *      tags : [Admins]
 * 
 *     
 */

//permite actualizar admins
router.put('/admins/:id', updateAdmin)




export default router