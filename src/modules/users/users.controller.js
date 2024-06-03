import User from "../../../DataBase/Models/userModel.js"

import {Op} from 'sequelize'

// ============================Get All Users===================================
export let getAllUsers = async (req,res,)=>{

    let users = await User.findAll()
    res.json({
        message: "done",
        users
    })
}

// ============================Sign Up===================================
export let signUp = async (req,res,)=>{
    let {userName,email,password,age,gender} =  req.body
    let EmailDoesExist = await User.findOne({
        where:{
            email
        }
    })
    console.log(EmailDoesExist);
    if(EmailDoesExist){
        return res.json({
            message:"Email is already inuse try another email"
        })
    }
    else{
        let newUser = await User.create({userName,email,password,age,gender})

        console.log({newUser});
        if(newUser._options.isNewRecord){
            return res.json({
                message:"Email has been added successfully"
            })
        } 
    }

}


// ============================Sign in===================================

export let signin = async (req,res,)=>{
    let {email,password} =  req.body
    let EmailDoesExist = await User.findOne({
        where:{
            email,
            password
        }
    })

    if(EmailDoesExist){
        return res.json({
            message:"signed in"
        })
    }
    else{
        return res.json({
            message:"email or password is incorrecet"
        })
    }

}


// ============================ Update User===================================

export let updateUser = async (req,res,)=>{
    let {id, userName,email,password,age,gender} =  req.body

    let userTest = await User.findByPk(id)

    if(userTest){
        let EmailDoesExist = await User.update({
            userName,
            email,
            password,
            age,
            gender
        },{
            where:{
                id
            }
        })
        if(EmailDoesExist){
            return res.json({
                message:"updated Successfully"
            })
        }
    }
    else{
        console.log("error");
        return res.json({
            message:"user doesn't exist"
        })
    }

} 


// ============================ Delete User===================================

export let deleteUser = async (req,res,)=>{
    let {id} =  req.body

    let userTest = await User.findByPk(id)

    if(userTest){
        let EmailDoesExist = await User.destroy({
            where:{
                id
            }
        })
        if(EmailDoesExist){
            return res.json({
                message:"deleted Successfully"
            })
        }
    }
    else{
        console.log("error");
        return res.json({
            message:"user doesn't exist"
        })
    }

} 


// ============================Search for a user with a letter and age condition===================================
export let searchWithLetter = async (req,res,)=>{

    let users = await User.findAll({
        where:{
            userName: {
                [Op.like]: 'a%'
            },
            age:{
                [Op.gt]: 30
            }
        }
    })
    res.json({
        message: "done",
        users
    })
}


// ============================Search for a user with a letter and age condition===================================
export let searchInRange = async (req,res,)=>{

    let users = await User.findAll({
        where:{
            age:{
                [Op.between]: [25,30]
            }
        }
    })
    res.json({
        message: "done",
        users
    })
}


// ============================Search for the 3 oldest users===================================
export let searchFor3oldestUsers = async (req,res,)=>{

    let users = await User.findAll({
        order: [['age', 'DESC']],
        limit: 3
    })
    res.json({
        message: "done",
        users
    })
}

