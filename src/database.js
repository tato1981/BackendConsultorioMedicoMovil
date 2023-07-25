import mysql from 'mysql2/promise';
import {config} from './config'

//conexion a la base de datos
export const connect = async() =>{
   return await mysql.createConnection(config)  
      
}



