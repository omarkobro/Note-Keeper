
import {Sequelize} from 'sequelize'

export const DB_config = new Sequelize("assignment_4","root","",{
    host: "localhost",
    dialect: "mysql"
})

export const DB_connection = async ()=>{
    await DB_config.sync().then((res)=>{
        console.log("db connected successfully")
    }).catch((err)=>{
        console.log("connection failed",err);
    })
}

