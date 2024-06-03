import { DB_config } from "../connection.js";
import { DataTypes } from "sequelize";
import User from "./userModel.js";

let Note = DB_config.define('tbl_note', {
    id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    },
    title:{
        type:DataTypes.STRING,
        required:true
    },
    content:{
        type:DataTypes.STRING,
    },


    userId:{
        type:DataTypes.INTEGER,
        required:true,
    },
    
},{
    timestamps:true
}) 

// Note.belongsTo(User,{foreignKey: "userId"})

export default Note