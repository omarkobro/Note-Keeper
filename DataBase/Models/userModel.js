import { DB_config } from "../connection.js";
import { DataTypes } from "sequelize";
import Note from "./noteModel.js";

let User = DB_config.define('tbl_user', {
    id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    },
    userName:{
        type:DataTypes.STRING,
        required:true
    },
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        required:true
    },
    
    age:{
        type:DataTypes.INTEGER,
        required:true
    },
    gender:{
        type:DataTypes.ENUM('male', 'female'),
        required:true,
    },
},{
    timestamps:true
}) 

// User.hasMany(Note,{foreignKey: "userId"})

export default User