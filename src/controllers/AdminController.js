import { connect } from "../database";


//obtener todos los admins registrados
export const getAdmins = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM admins')
    //console.log(rows)
    res.json(rows)

}

//obtiene un registro 
export const getAdmin = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM admins WHERE id = ?',[req.params.id])
    res.json(rows[0])
}





//obtiene el total de los registros
export const getAdminCount = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT COUNT(*) FROM admins ')      
    res.json(rows[0]['COUNT(*)']);

}

//agrega admins
export const createAdmin = async (req, res) => {
    const connection = await connect()
    const [result] = await connection.query('INSERT INTO admins(nombre, apellidos, documento, email, telefono, password) VALUES (?,?,?,?,?,?)',
    [
        req.body.nombre,
        req.body.apellidos,
        req.body.documento,
        req.body.email,
        req.body.telefono,
        req.body.password
    ])

    //seleccion de solo lo que se necesita de la respuesta del servidos
    res.json({  
        id: result.insertId,
        ...req.body
    });
}


export const deleteAdmin = async (req, res) => {
    const connection = await connect()
    await connection.query('DELETE FROM admins WHERE id = ?',
    [req.params.id
    ]) 
    //console.log(result)
    //res.json({})
    res.sendStatus(204);
}

export const updateAdmin = async (req, res) => {
    const connection = await connect()
    await connection.query('UPDATE admins SET ? WHERE id =? ',        
        [
            req.body,
            req.params.id
        ])
        //console.log(result)    
        res.sendStatus(204);
}    