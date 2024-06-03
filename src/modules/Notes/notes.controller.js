import Note from "../../../DataBase/Models/noteModel.js"
import User from "../../../DataBase/Models/userModel.js"


// ============================Get All Notes===================================
export let getAllNotes = async (req,res,)=>{
    let notes = await Note.findAll()
    res.json({
        message: "done",
        notes
    })
}


// ============================Add Note===================================
export let addNote = async (req,res,)=>{
    let {title,content,userId} =  req.body

    let newNote = await Note.create({title,content,userId})

    console.log({newNote});
    if(newNote._options.isNewRecord){
        return res.json({
            message:"Note has been added successfully"
        })
    }
    else{
        console.log("fail");
    }
}


// ============================Delete Note===================================
export let deleteNote = async (req,res,)=>{
    let {id,userId} =  req.body

    let testNote = await Note.findOne({
        where:{
            userId
        }
    })
    if(testNote){
        let  removeNote = await Note.destroy({
            where:{
                id 
            }
        })
        if(removeNote){
            return res.json({
                message:"Note has been deleted"
            })
        }
        else{
            return res.json({
                message:"Note doesn't exist"
            })
        }
    }
    else{
        return res.json({
            message: "incorrect user id Please check your id and try again"
        })
    }
}


// ============================Update Note===================================
export let updateNote = async (req,res,)=>{
    let {id,title,content,userId} =  req.body

    let testNote = await Note.findOne({
        where:{
            userId
        }
    })
    if(testNote){
        let  updateNote = await Note.update({
            title,
            content,
        },{
            where:{
                id
            }
        })
        if(updateNote[0] == 1){
            return res.json({
                message:"Note has been updated"
            })
        }
        else{
            return res.json({
                message:"Note doesn't exist"
            })
        }
    }
    else{
        return res.json({
            message: "incorrect user id Please check your id and try again"
        })
    }
}

// ============================get all Notes with their owners info===================================

export let notesWithWriterInfo = async (req,res)=>{
    Note.belongsTo(User, { foreignKey: 'userId' });
    let notes = await Note.findAll({
    attributes: [
        'id',
        'title',
        'content',
        'userId',
        'createdAt',
        'updatedAt'
    ],
    include: [{
        model: User,
        attributes: ['userName']
    }]
    })
    res.json({
        message: "done",
        notes 
    })
} 


