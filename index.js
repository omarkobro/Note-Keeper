import express from 'express';
import { DB_connection } from './DataBase/connection.js';

import userRouter from './src/modules/users/users.router.js'
import noteRouter from './src/modules/Notes/notes.router.js'
let app = express()

app.use(express.json())
app.use(userRouter)
app.use(noteRouter)

DB_connection()
app.listen(3000, ()=>{
    console.log("server is running fine on host 3000");
})